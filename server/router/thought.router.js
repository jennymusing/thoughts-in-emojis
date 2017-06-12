const router = require('express').Router()
const thoughtController = require('../controllers/thought.controller.js')

router.route('/thoughts')
    .get(thoughtController.getAllThoughts)
    .post(thoughtController.addThought)

module.exports = router