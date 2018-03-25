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
    this.removeLineBreaking = this.removeLineBreaking.bind(this)
    this.mostRepeated = this.mostRepeated.bind(this)
    this.setQuery = this.setQuery.bind(this)
  }

  // Initial state of the app
  componentDidUpdate(prevProps, prevStates) {
    if(prevProps.data !== this.props.data) {
      this.setQuery()
    }
  }

  // Will have a nice loading screen no data
  render() {
    if(this.props.data.length > 0) {
      return (
          <Api termQuery={ this.state.termQuery } />
      )
    }
    else {
      return <View></View>
    }
  }

  // Will remove all line breaking in a list
  removeLineBreaking() {
    let word = this.props.data.toLowerCase()
    word = word.replace(/(\r\n|\n|\r)/gm,"")
    word = word.replace(/(\r\n|\n|\r)/gm," ")
    word = word.replace(/\s+/g," ")

    return word
  }


  // Will parse the data and break it into words
  parseData() {
    let text = this.removeLineBreaking()
    let words = text.split(' ')

    return words
  }

  // Returns most repeated character in a list
  mostRepeated(words) {
    if(words.length == 0)
      return null
      let modeMap = {}
      let maxEl = words[0], maxCount = 1

    for(let i = 0; i < words.length; i++) {
      let el = words[i]

      if(modeMap[el] == null)
        modeMap[el] = 1
      else
        modeMap[el]++;

      if(modeMap[el] > maxCount) {
        maxEl = el
        maxCount = modeMap[el]
      }
    }
    return maxEl
  }

  setQuery() {
    // Get parsed and most repeated for first set
    const parsed = this.parseData()
    const firstRepeated = this.mostRepeated(parsed)

    // gets second parsed and most repeated for second set
    const secondParse = parsed.filter(val => val !== firstRepeated)
    const secondRepeated = this.mostRepeated(secondParse)

    // Combines the outout query
    const query = firstRepeated + ' ' + secondRepeated

    // Sets the term query
    this.setState({ termQuery: query })
  }
}

TextData.propTypes = {
  data: propTypes.string.isRequired,
}

export default TextData
