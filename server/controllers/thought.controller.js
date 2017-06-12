const Thought = require('../../db/models/thoughtModel.js')

module.exports = {
	getAllThoughts: (req, res) => {
		Thought.findAll({})
			.then(thoughts => {
				res.status(200).send(thoughts)
			})
			.catch(err => {
				res.send(err)
			})
	},
	addThought: (req, res) => {
		Thought.create({
			content: req.body.content,
			topic: req.body.topic
		})
		.then(thought => {
			res.status(200).send(movie)
		})
		.catch(err => {
			res.send(404)
		})
	}
}