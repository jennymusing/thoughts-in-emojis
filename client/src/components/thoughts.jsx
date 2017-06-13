import React from 'react'
import Thought from './thought.jsx'
import axios from 'axios'
console.log('FILE: thoughts.jsx')

class Thoughts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			thoughts: []
		}
		this.handleGather = this.handleGather.bind(this)
	}

	render() {
		return (
			<div>			
				{this.state.thoughts.map((thought, i) => {
					return <div key={i}><Thought thought={thought}/></div>
				})}
			</div>
		)
	}

	componentDidMount() {
		this.handleGather()
	}

	handleGather() {
		axios.get('./thoughts')
			.then(response => {
				console.log('+++FILE:thoughts.jsx handleGather: ', response)
				this.setState({
					thoughts: response.data
				})
			})
			.catch(err => {
				console.error(err)
			})
	}

}

export default Thoughts