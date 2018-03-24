import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios';

export default class Api extends Component {
  state = {
    sets: []
  }

  componentWillMount(){
   axios.get('https://api.quizlet.com/2.0/search/sets?access_token=J3gHq7M2HYSbxusKS9D9pXEmP33nW2DXxEkbd8Nf&q=ten')
      .then(res => res.data)
      .then(data => {
        this.setState({sets: data.sets})
      })
      .catch(function(err){
        console.log(err)
      })
  }

  render() {
    const sets = this.state.sets.map( (set,i) => (
          <Text style={{ backgroundColor: '#ccc', marginBottom: 10}}key={i}> {set.title} by {set.created_by} </Text>
          ))
    return (
        <View>
          <Text>Hello From Api Edit me Please</Text>
          {sets}
        </View>
    )
  }
}
