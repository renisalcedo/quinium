import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';

const Tabs = TabNavigator({
  Camera: {
  screen: props => <props.screenProps.camera />,
  navigationOptions: {
    tabBarLabel: 'Camera',
    tabBarIcon: ({tintColor, focused}) => (
      <Ionicons
        name={focused ? 'ios-camera' : 'ios-camera-outline'}
        size={29}
        style={{color:tintColor}}
      />
    )
  }
},

Quiz: {
    screen: props => <View>{ <props.screenProps.quiz /> }</View>,
    navigationOptions: {
      tabBarLabel: 'Questions',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={focused ? 'ios-book' : 'ios-book-outline'}
          size={29}
          style={{color:tintColor}}
        />
      )
    }
  },
},

  {initialRouteName: 'Camera'}
)

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.camera = this.props.Camera
    this.quiz = this.props.Quiz
  }

  render() {
    return (
      <Tabs screenProps={{ camera: this.camera, quiz: this.quiz }} />
    )
  }
}

export default Navigation
