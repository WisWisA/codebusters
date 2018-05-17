const express = require('express')
const cors = require('cors')
const _ = require('lodash')

const app = express()
const PORT = 7777

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.use(cors()) 

app.get('/', (req, res) => {
  var name = 'dt'
  res.send(`hi ${name} welcome to titlelator api`)
})

app.get('/api/random_title', (req, res) => {
  
  const titles = [
    'dogs dogs dogs',
    'lots of cake',
    'bees',
    'car for you, car for me'
  ]

  const data = {
    title: _.sample(titles)
  }

  res.json(data)
})