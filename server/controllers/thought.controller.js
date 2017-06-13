const Thought = require('../../db/models/thoughtModel.js')

module.exports = {
	getAllThoughts: (req, res) => {
		console.log("+++ thought.controller.js getAllThoughts expected: ", res)
		Thought.findAll({})
			.then(thoughts => {
				res.status(200).send(thoughts)
			})
			.catch(err => {
				res.send(err)
			})
	},
	addThought: (req, res) => {
		console.log("+++ thought.controller.js addThought expected: ", req.body)
		Thought.create({
			content: req.body.content,
			topic: req.body.topic
		})
		.then(thought => {
			res.status(200).send(thought)
		})
		.catch(err => {
			res.send(404)
		})
	}
}