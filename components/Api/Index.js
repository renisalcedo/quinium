import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios';

class Api extends Component {
  render() {
    return (
      <View>
        <Text>Hello From Api Edit me Please</Text>
      </View>
    )
  }
}

// /* GET Requests
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

// */ End of GET Requests

// /* POST Requests
export default class personsList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
           </form>
         </div>
      )
  }
}
// */ End of POST Requests

export default Api
