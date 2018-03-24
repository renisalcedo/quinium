import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import axios from 'axios';

class Api extends Component {
  render() {
    return (
      <View>
        <Text>Hello From Api Edit me Please</Text>
      </View>
    )
  }
}

// /*
export default class personsList extends React.Component {
	state = {
		person: []
	}

	componentMount() {
		axios.get('https://placeholder.com')
			.then(res => {
				const persons = res.data;
				this.setState({ person });
			})
	}

	render() {
		return (
			<ul>
				{ this.state.persons.map(person => <li>{person.name}</li>)}
			</ul>
		)
	}
}

// */

export default Api
