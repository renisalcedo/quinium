import React, { Component } from 'react'
import { View } from 'react-native'

// All components
import Camera from './Camera/Index'
import Quiz from './Quiz/Index'
import Navigation from './Navigation/Index'
import TextData from './Camera/TextData'

class App extends Component {
  render() {
    return (
      <Navigation
        Camera = {Camera}
        Quiz = {Quiz}
      />
    )
  }
}

export default App
