const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

const routesAuth = require('./routes/auth/')
const routesBlog = require('./routes/blog/')

const app = express()
const pathClient = path.join(__dirname, '../client')

app.use(express.static(pathClient))
app.use(bodyParser.json())
app.use(session({ secret: 'my-secret' }))

app.use( routesAuth )
app.use( routesBlog )

app.get('/', function (req, res) {
  if (req.session && req.session.email) {
    res.redirect('/home')
  } else {
    const pathHome = path.join(pathClient,'home.html')
    res.sendFile(pathHome)
  }
})


app.get('/home', function (req, res) {
  if (req.session && req.session.email) {
    const pathHome = path.join(pathClient,'blog.html')
    res.sendFile(pathHome)
  } else {
    res.send('unauthorized')
  }
})

module.exports = app
