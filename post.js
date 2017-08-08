const assert = require('assert')

function addPost (title, body, callback) {
  global.db.collection('post').insertOne(
    { title, body },
    function (err, result) {
      assert.equal(err, null)
      console.log('Saved the blog post details.')
      if (err == null) callback(true)
      else callback(false)
    }
  )
}

function getPost (callback) {
  global.db.collection('post', function (err, collection) {
    assert.equal(err, null)
    collection.find().toArray(function (err, list) {
      assert.equal(err, null)
      callback(list)
    })
  })
}

module.exports = { addPost, getPost }
