const assert = require('assert')

function validateSignIn (email, password, callback) {
  const userData = { email, password }
  global.db.collection('user')
    .findOne(
      userData,
      function (err, result) {
        assert.equal(err, null)
        if (result === null) callback(false)
        else callback(true)
      }
    )
}

module.exports = validateSignIn
