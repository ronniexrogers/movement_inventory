const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('ayye, im the backend')
  })

module.exports = router