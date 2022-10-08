const express = require('express')
const router = express()
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

module.exports = router