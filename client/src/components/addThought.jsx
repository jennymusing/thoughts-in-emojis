import React from 'react'
import axios from 'axios'
console.log('FILE: addThought.jsx')

class AddThought extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			thoughts: [],
			topic: "topic #1",
			content: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({content: e.target.value})
	}
	
	handleSubmit(e) {
		e.preventDefault()
		let thought = {
			topic: this.state.topic,
			content: this.state.content
		}
		this.setState((prevState) => ({
			thoughts: prevState.thoughts.concat(thought),
			content: ''
		}))
		
		axios.post('/thoughts', thought)
			.then(response => {
				console.log(response)
			})
			.catch(err => {
				console.error(err)
			})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
				<input name="topic" onChange={this.handleChange} value={this.state.topic} />
				<input name="content" onChange={this.handleChange} value={this.state.content} />
				<button>Share Your Thought</button>
				</form>
			</div>		
		)
	}
}

export default AddThought
