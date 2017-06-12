const Sequelize = require('sequelize')
const db = new Sequelize('mysql://be79619ed15c1e:226d072e@us-cdbr-iron-east-03.cleardb.net/heroku_c8cf9408a9c7ebc?reconnect=true')

db.authenticate()
    .then(() => {
        console.log('Successfuly connected to the database')
    })
    .catch((err) => {
        console.log('Failed to connect to the database: ', err)
    })

module.exports = db