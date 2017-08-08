const express = require('express')
const router = express.Router()

const validateSignIn = require('./helpers/validateSignIn')
const signUp = require('./helpers/signup')

router.post('/signin', (req, res) => {
  const { email, password } = req.body

  validateSignIn(email, password, result => {
    if (result) {
      req.session.email = email
      res.send('success')
    } else {
      res.send('Wrong username password')
    }
  })
})

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body
  if (name && email && password) {
    signUp(name, email, password)
  } else {
    res.send('Failure')
  }
})

module.exports = router
