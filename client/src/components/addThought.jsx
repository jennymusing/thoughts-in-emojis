import React from 'react'
import axios from 'axios'
import emojis from './emojis.jsx'
import emojiStyleSheet from "../../twemoji-awesome.css";
console.log('FILE: addThought.jsx')

class AddThought extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			thoughts: [],
			topic: "how was your wknd",
			content: ''
		}
		// this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		console.log('this.state.content: ', this.state.content)
	}

	// handleChange(e) {
	// 	let stringifiedEmojis = this.props.emojiButton.join()
	// 	console.log('stringifiedEmojis: ', stringifiedEmojis)
	// 	this.setState({content: stringifiedEmojis})
	// }
	
	// componentWillReceiveProps() {
	// 	this.stringifyEmojis()
	// }

	// stringifyEmojis() {
	// 	let stringifiedEmojis = this.props.emojiButton.toString()
	// 	console.log('this.props.emojiButton: ', this.props.emojiButton)
	// 	console.log('stringifiedEmojis: ', stringifiedEmojis)
	// 	this.setState({content: stringifiedEmojis})
	// 	// this.setState((prevState) => {
	// 	// 	prevState.content.concat(stringifiedEmojis)
	// 	// })
	// }

	handleSubmit(e) {
		e.preventDefault()
		let thought = {
			topic: this.state.topic,
			content: this.props.emojiButton
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
		console.log('+++addThought.jsx: this.state.content: ', this.state.content)
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
				<input name="topic" value={this.state.topic} />
				<input name="content" value={this.state.content} />
				<button>Share Your Thought</button>
				</form>
			</div>		
		)
	}
}

export default AddThought
