import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios';

// Quiz Component
import Quiz from '../Quiz/4_questions'

export default class Api extends Component {
  constructor(props) {
    super(props)

    // Initial states for the component
    this.state = {
      termQuery: props.termQuery,
      searchQuery: '',
      quizId: 0,
      sets: [],
    }

    // Functions constructors
    this.searchSets = this.searchSets.bind(this)
    this.searchContent = this.searchContent.bind(this)
  }

    // Initial State of the app
  componentDidUpdate(prevProps, prevStates) {
    if(prevProps.termQuery !== this.props.termQuery) {
      this.setState({ termQuery: this.props.termQuery })

      this.searchContent(this.props.termQuery)
    }
  }

  render() {
    if(this.state.sets) {
      return (
        <View style={{ flex: 1 }}>
          <Quiz sets={ this.state.sets } />
        </View>
      )
    } else {
      return <Text>LOADING ...</Text>
    }
  }

  // Search for the content beased on the user previous search
  searchContent(query) {
    axios.get(`https://api.quizlet.com/2.0/search/sets?client_id=wEGVnCKvGn&whitespace=1&q=${query}`)
      .then(res => res.data)
      .then(data => {
        this.setState({ quizId: data.sets[0].id })

        // Executes the function for sets right after handling data
        this.searchSets(this.state.quizId)
      })
      .catch(function(err){
        console.log(err)
      })
   }

  // Will search the term searched by the user
  searchSets(query) {
    axios.get(`https://api.quizlet.com/2.0/sets/${query}?client_id=wEGVnCKvGn&whitespace=1`)
      .then(res => {
        // Set the sets for the data to be used for the quizzes
        this.setState({ sets: res.data.terms })
      })
      .catch(err => console.log(err))
  }
}
