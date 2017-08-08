const assert = require('assert')

function getPost (callback) {
  global.db.collection('post', function (err, collection) {
    assert.equal(err, null)
    collection.find().toArray(function (err, list) {
      assert.equal(err, null)
      callback(list)
    })
  })
}

module.exports = getPost
