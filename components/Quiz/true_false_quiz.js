import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
var qTerm = ["Q1?","Q2?","Q3?","Q4?","Q5?","Q6?"];//
var qDef = ["D1","D2","D3","D4","D5","D6"];//This willne the array of answers
var fruit = "Banana";
export default class ButtonBasics extends Component 
{
  _onPressButtonWrong() 
  {
    Alert.alert('Ben is not a hoe')
  }
  _onPressButtonRight() 
  {
    Alert.alert('Ben is a hoe')
  }
  _questionButtonPress()
  {
    Alert.alert(qTerm[0])
  }
  _answerButtonPress()
  {
    Alert.alert(qDef[0])
  }
  constructor(props) {
    super(props);
    this.state = {
      titleText: qTerm[0]
    };
  }
  render() {
    return (
      
      <View style={styles.container}>
      <Text style={styles.titleText,{textAlign: 'center'}} onPress={this._answerButtonPress}>
          {this.state.titleText}
        </Text>
        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />
        <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButtonWrong}
              title="Wrong"
              color = "red"
            />
            <Button
              onPress={this._onPressButtonRight}
              title="Right"
              color="green"
            />
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
var qTerm = ["Q1?","Q2?","Q3?","Q4?","Q5?","Q6?"];//
var qDef = ["D1","D2","D3","D4","D5","D6"];//This willne the array of answers
var fruit = "Banana";
export default class ButtonBasics extends Component 
{
  _onPressButtonWrong() 
  {
    Alert.alert('Ben is not a hoe')
  }
  _onPressButtonRight() 
  {
    Alert.alert('Ben is a hoe')
  }
  _questionButtonPress()
  {
    Alert.alert(qTerm[0])
  }
  _answerButtonPress()
  {
    Alert.alert(qDef[0])
  }
  constructor(props) {
    super(props);
    this.state = {
      titleText: qTerm[0]
    };
  }
  render() {
    return (
      
      <View style={styles.container}>
      <Text style={styles.titleText,{textAlign: 'center'}} onPress={this._answerButtonPress}>
          {this.state.titleText}
        </Text>
        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />
        <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButtonWrong}
              title="Wrong"
              color = "red"
            />
            <Button
              onPress={this._onPressButtonRight}
              title="Right"
              color="green"
            />
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
