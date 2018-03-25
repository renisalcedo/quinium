import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
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
    }

    this.renderQuiz = this.renderQuiz.bind(this)
  }

  componentDidUpdate(prevProps, prevStates) {
    if(prevProps.sets !== this.props.sets) {
      this.setState({ sets: this.props.sets, loading: false })
    }
  }

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress, (e) => console.log(e)}>
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
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );
  
    _renderModalContentIncorrect = () => (
    <View style={styles.modalContent}>
      <Text>Sorry! The correct answer was VARIABLE.</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
      return (
        <View style={styles.container}>
          {this.renderQuiz()}

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
    return this.state.sets.map((res, key) => {
      return (
        <View>
          {this._renderButtonQuestion(res.definition, () => this.setState({ visibleModal: 0, onProgress: 0 }))}
          {this._renderButton('A.' + "   " + qDef[0], () => this.setState({ visibleModal: 1, onProgress: 1 }))}
          {this._renderButton('B.' + "   " + qDef[1], () => this.setState({ visibleModal: 2, onProgress: 3 }))}
          {this._renderButton('C.' + "   " + qDef[2], () => this.setState({ visibleModal: 2, onProgress: 4 }))}
          {this._renderButton('D' + "   " + qDef[3],  () =>  this.setState({ visibleModal: 2, onProgress: 5 }))}
        </View>
      )
    })
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
    width: 300,
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
