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

module.exports = addPost
