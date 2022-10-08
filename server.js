const express = require('express')
const path = require('path')

const app = express();
const port = process.env.PORT || 3000

// Import Router
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')

app.use(express.static(path.resolve(__dirname, 'build')))

// Use Route
app.use('/', indexRouter)
app.use('/api', apiRouter)

app.use('/', (req, res) => {
  res.status(404)
  res.send('404 File Not Found')
})

app.listen(port, () => {
  console.info(`Server listening on port ${port}`)
});