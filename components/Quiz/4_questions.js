import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal'; // 2.4.0
var qDef = ["A1","A2","A3","A4","A5","A6"];

export default class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visibleModal: null,
      sets: [],
      loading: true,
      onProgress: false,
      answer: '',
      assigned: false,
    }

    this.renderQuiz = this.renderQuiz.bind(this)
    this.randomOpt = this.randomOpt.bind(this)
  }

  componentDidUpdate(prevProps, prevStates) {
    if(prevProps.sets !== this.props.sets) {
      this.setState({ sets: this.props.sets, loading: false })
    }
  }

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  
    _renderButtonQuestion = (text) => (
    <View style={styles.buttonQuestion}>
        <Text>{text}</Text>
    </View>    
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Correct!</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null, onProgress: false }))}
    </View>
  );
  
    _renderModalContentIncorrect = () => (
    <View style={styles.modalContent}>
      <Text>Sorry try again!</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null, onProgress: false }))}
    </View>
  );

  render() {
      return (
        <View style={styles.container}>

          <ScrollView contentContainerStylestyle={{ flexGrow: 2, justifyContent: 'center' }}>
            {this.renderQuiz()}
          </ScrollView>

          <Modal
            isVisible={this.state.visibleModal === 0}
            backdropColor={'red'}
            backdropOpacity={1}
            animationIn={'zoomInUp'}
            animationOut={'zoomOutUp'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
          >
            {this._renderModalContentIncorrect()}
          </Modal>

          <Modal
            isVisible={this.state.visibleModal === 1}
            backdropColor={'#7AE561'}
            backdropOpacity={1}
            animationIn={'zoomInDown'}
            animationOut={'zoomOutDown'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
          >
            {this._renderModalContent()}
          </Modal>

          <Modal
            isVisible={this.state.visibleModal === 2}
            backdropColor={'#EE4926'}
            backdropOpacity={1}
            animationIn={'zoomInUp'}
            animationOut={'zoomOutUp'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
          >
            {this._renderModalContentIncorrect()}
          </Modal>

        </View>
      );
    }

  renderQuiz() {
    let count = 0
    return this.state.sets.map((res, key) => {

      if(res.definition) count += 1

      if(!this.state.onProgress && count < 5) {
        {() => this.setState({ onProgress: true, answer: res.term, assign: false })}
        const choices = [this.randomOpt(res.term, 0), this.randomOpt(res.term, 1),
                         this.randomOpt(res.term, 2), this.randomOpt(res.term, 3)]
        return (
          <View>
            {this._renderButtonQuestion(res.definition, () => this.setState({ visibleModal: 0, onProgress: false }))}
            {this._renderButton('A.' + "   " + choices[0], () => this.setState({ visibleModal: choices[0] === res.term ? 1 : 2 }))}
            {this._renderButton('B.' + "   " + choices[1], () => this.setState({ visibleModal: choices[1] === res.term ? 1 : 2 }))}
            {this._renderButton('C.' + "   " + choices[2], () => this.setState({ visibleModal: choices[2] === res.term ? 1 : 2 }))}
            {this._renderButton('D' + "   " + choices[3],  () =>  this.setState({ visibleModal: choices[3] === res.term ? 1 : 2 }))}
          </View>
        )
      }
    })
  }

  // Will give a random value to each option
  randomOpt(ans, count) {
    const arr = this.state.sets
    const random = Math.floor(Math.random() * arr.length)

    if(count >= 3 && !this.state.assign) {
      this.setState({ assign: true })
      return ans
    }

    if(this.state.assign)
      return arr.filter(res => res !== ans)[random].term

    const choice = arr[random].term
    if(choice === ans) {
      this.setState({ assign: true })
    }

    return choice
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonQuestion: {
    padding: 12,
    margin: 16,
    height: 100,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
