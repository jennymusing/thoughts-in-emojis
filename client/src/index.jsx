import React from 'react'
import ReactDOM from 'react-dom'
console.log('FILE: index.js')

import Thoughts from './components/thoughts.jsx'
import AddThought from './components/addThought.jsx'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render() {
		return (
			<div>
				<div>Thoughts in Emojis</div>
				<AddThought />
				<Thoughts />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))