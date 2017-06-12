const Sequelize = require('sequelize')
const db = require('../config.js')

const Thought = db.define('thoughts', {
    content: Sequelize.STRING,
    topic: Sequelize.STRING,
})

Thought.sync()

module.exports = Thought