const express = require('express') // 3rd party module
const request = require('request') // 3rd party module
const querystring = require('querystring') // built in module
const morgan = require('morgan') // 3rd party module

const PORT = 4567;
const app = express()

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.set('views', './views')
app.set('view engine', 'ejs')

 // [ get '/details?title=jaws' ] <--- client 
 //  ||
 //  ||
app.use(morgan('combined')) 
 //  \/
app.use(express.static('public')) // --> respond
 //  ||
// app.use(function(req, res, next) { 
//   console.log(`${req.method} ${req.path}`) 
//   next()
// })
 //  \/
app.get('/about', (request, response) => {
  response.send('about page')
})
 //  ||
 //  \/
app.get('/details', (req, res) => {

  const qs = {
    apikey: '2f6435d9',
    t: req.query.title
  }

  const url = `http://omdbapi.com/?${querystring.stringify(qs)}`;
  
  const options = {
    url: url,
    json: true
  } 

  request(options, function(err, omdbRes, data) {
    res.render('details', { movie: data })
  })

})



