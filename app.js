const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

require('./db')
const user = require('./user')
const post = require('./post')

const app = express()
const PORT = 7777
const pathPublic = path.join(__dirname, 'public')

app.use(express.static(pathPublic))
app.use(bodyParser.json())
app.use(session({ secret: 'my-secret' }))

app.get('/', function (req, res) {
  if (req.session && req.session.email) {
    res.redirect('/home')
  } else {
    const pathHome = path.join(__dirname, '/public/home.html')
    res.sendFile(pathHome)
  }
})


app.get('/home', function (req, res) {
  if (req.session && req.session.email) {
    const pathHome = path.join(__dirname, '/public/blog.html')
    res.sendFile(pathHome)
  } else {
    res.send('unauthorized')
  }
})

app.post('/signin', (req, res) => {
  const { email, password } = req.body

  user.validateSignIn(email, password, result => {
    if (result) {
      req.session.email = email
      res.send('success')
    } else {
      res.send('Wrong username password')
    }
  })
})

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body
  if (name && email && password) {
    user.signup(name, email, password)
  } else {
    res.send('Failure')
  }
})

app.post('/addpost', (req, res) => {
  const { title, body } = req.body
  post.addPost(title, body, function (result) {
    res.send(result)
  })
})

app.get('/posts', (req, res) => {
  post.getPost(function (result) {
    res.send(result)
  })
})

app.listen(PORT, () => console.log(`Started listening on port ${PORT}`))
