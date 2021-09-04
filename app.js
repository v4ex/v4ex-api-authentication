require('dotenv').config()

const express = require('express')
const app = express()

const apiRoutes = require('./routes/api')
 
app.get('/', function(req, res) {
  res.type('text')
    .send(process.env.PROJECT || 'v4ex-api-authentication')
})

apiRoutes(app)

module.exports = app
