import React from 'react'
console.log('FILE: thought.jsx')

const Thought = ({ thought }) => (
	<div>		
		<p>{thought.content}</p>
	</div>
)

export default Thought