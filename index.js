const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('HI')
})

app.get('/video/:video', (req, res) => {
  res.sendFile(`${__dirname}/videos/${req.params.video}`)
})

app.get('/image/:image', (req, res) => {
  res.sendFile(`${__dirname}/images/${req.params.image}`)
})

app.get('/audio/:audio', (req, res) => {
  res.sendFile(`${__dirname}/audio/${req.params.audio}`)
})

app.listen(5000, () => {
  console.log('HI')
})