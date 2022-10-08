module.exports = app => {
    const path      = require('path')
    const router    = require('express').Router()

    router.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })

    app.use('/api', router)
}