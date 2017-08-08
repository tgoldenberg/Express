const express = require('express')

const app = express()

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.get('/ab+cd', function (req, res) {
  res.send('Hello world I am abcd!')
})

app.listen(3000, function () {
  console.log('example app listening on port 3001')
})
