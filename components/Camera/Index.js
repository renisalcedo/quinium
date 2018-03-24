import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

import axios from 'axios'

export default class CameraComponent extends React.Component {
  constructor(props) {
    super(props)

    this.takePicture = this.takePicture.bind(this)
    this.uploadPicture = this.uploadPicture.bind(this)
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => this.camera = ref } style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: '#428bca',
                  padding: 10,
                  alignSelf: 'flex-end',
                  alignItems: 'center'
                }}
                onPress={() => {
                  this.takePicture()
                }}
              >
                <Text style={{
                  fontSize: 18,
                  color: '#5bc0de',
                  }}>Capture
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }

  async takePicture() {
    if(this.camera) {
      let picture = await this.camera.takePictureAsync()

      this.setState({
        pic: picture,
      })

      this.uploadPicture()
    }
  }

  uploadPicture() {
    console.log(this.state.pic)
    const url = 'https://5596e272.ngrok.io/recognize'
    const form = new FormData()

    form.append('recognize', {
      uri: this.state.pic.uri,
      type: 'image/jpeg',
      name: 'image.jpeg'
    })

    axios.post(url, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => res.data)
      .catch(err => err)
  }
}
