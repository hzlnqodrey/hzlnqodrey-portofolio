const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')))

app.use('/', (req, res) => {
  res.status(404)
  res.send('404 File Not Found')
})

// Import Router
require('./app/routes/index')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`)
});