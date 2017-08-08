const express = require('express')
const router = express.Router()

const addPost = require('./helpers/addPost')
const getPost = require('./helpers/getPost')

router.post('/posts', (req, res) => {
  const { title, body } = req.body
  addPost(title, body, function (result) {
    res.send(result)
  })
})

router.get('/posts', (req, res) => {
  getPost(function (result) {
    res.send(result)
  })
})

module.exports = router
