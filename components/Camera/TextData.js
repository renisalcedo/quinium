import React, { Component } from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'

class TextData extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

TextData.propTypes = {
  data: propTypes.string.isRequired,
}

export default TextData
