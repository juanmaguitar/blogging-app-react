const assert = require('assert')

function signup (name, email, password) {
  global.db.collection('user').insertOne(
    { name, email, password },
    function (err, result) {
      assert.equal(err, null)
      console.log('Saved the user sign up details.')
    }
  )
}

module.exports = signup
