const express = require('express')

const server = express()

// JSON API Middleware
server.use(express.json())

// Static file serving middleware
server.use(express.static('./public'))

module.exports = server