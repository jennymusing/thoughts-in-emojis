import React from 'react'
import ReactDOM from 'react-dom'
console.log('FILE: index.js')

import AddThought from './components/addThought.jsx'
import Emojis from './components/emojis.jsx'
import Thoughts from './components/thoughts.jsx'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			emojiButton: []
		}
		this.handleClick = this.handleClick.bind(this)
		console.log('emojiButton: ', this.state.emojiButton)
	}

	handleClick(e) {
		console.log('+++index.jsx, handleClick invoked')
		let button = e.target.className
		this.setState((prevState) => {
			prevState.emojiButton.push(button)
		})
	}

	shouldComponentUpdate() {
		return true
	}

	render() {
		let emojiThought = this.state.emojiButton.map((emoji, i) => {
			return <i key={i} className={emoji}></i>
		})

		return (
			<div>
				<p>Thoughts in Emojis</p>
				<h1>How was your weekend?</h1>				
				<div>{emojiThought}</div>				
				<AddThought emojiButton={this.state.emojiButton}/>	
				<Emojis handleClick={this.handleClick}/>
				<Thoughts />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))