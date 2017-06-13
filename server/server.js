const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/config')
const thoughtRouter = require('./router/thought.router.js')

const app = express()
const port = 8000

app.use(express.static('client'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/', thoughtRouter)
    
app.listen(process.env.PORT || port, 'localhost', () => {
    console.log('App listening on port: ', port)
})
