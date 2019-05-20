const express = require('express')
const db = require('../db/emoji')

// set up this file as a stand alone
const router = express.Router()

router.get('/', (req, res) => {
  db.getEmoji()
  .then(emoji => {
    res.json(emoji)
  })
  .catch(err => {
    console.error(err)
    res.sendStatus(500).json({error: 'something is broken'})
  })
})

module.exports = router