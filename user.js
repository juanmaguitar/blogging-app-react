const assert = require('assert')

function signup (name, email, password) {
  global.db.collection('user').insertOne(
    { name, email, password },
    handleResultInsertion
  )
  function handleResultInsertion (err, result) {
    assert.equal(err, null)
    console.log('Saved the user sign up details.')
  }
}

function validateSignIn (email, password, callback) {
  const userData = { email, password }
  global.db.collection('user')
    .findOne(
      userData,
      (err, result) => {
        assert.equal(err, null)
        if (result === null) callback(false)
        else callback(true)
      }
    )
}

module.exports = { signup, validateSignIn }
