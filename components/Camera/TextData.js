import React, { Component } from 'react'
import propTypes from 'prop-types'
import { View, Text } from 'react-native'

// Api component
import Api from '../Api/Index'

class TextData extends Component {
  constructor(props) {
    super(props)

    // Query for making request to quiz data
    this.state = {
      termQuery: props.data
    }

    this.parseData = this.parseData.bind(this)
  }

  // Initial state of the app
  componentDidUpdate(prevProps, prevStates) {
    if(prevProps.data !== this.props.data) {
      this.parseData()
    }
  }

  // Will have a nice loading screen no data
  render() {
    if(this.props.data.length > 0) {
      return (
        <View>
          <Api termQuery={ this.state.termQuery } />
        </View>
      )
    }
    else {
      return <View></View>
    }
  }

  // Will take 2 words from the data text
  parseData() {
    let text = this.props.data
    let words = []

    // If the next word is a space away it takes that word
    for(let i = 0; i < text.length; i++) {
      if(text[i+1] === ' ' && words.length <= 2) {
        words.push(text[i])
      }
    }

    this.setState({ termQuery: words })
  }
}

TextData.propTypes = {
  data: propTypes.string.isRequired,
}

export default TextData
