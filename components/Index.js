import React, { Component } from 'react'
import { View } from 'react-native'

// All components
import Camera from './Camera/Index'
import Quiz from './Quiz/Index'
import Navigation from './Navigation/Index'
import Api from './Api/Index'

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <View style={{
        paddingVertical: 20
      }}>
        <Api />
        <Navigation />
      </View>
=======
      <Navigation
        Camera = {Camera}
        Quiz = {Quiz}
      />
>>>>>>> 8148accdc52a7b7f17e32d04a1a41a97764512fa
    )
  }
}

export default App
