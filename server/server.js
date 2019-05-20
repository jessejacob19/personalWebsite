const express = require('express')
const emojiRoutes = require('./routes/emoji')

const server = express()

// JSON API Middleware
server.use(express.json())

// Static file serving middleware
server.use(express.static('./public'))

//Add emoji routes
server.use('/api/emoji', emojiRoutes)

module.exports = server