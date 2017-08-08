var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var urlDb = 'mongodb://localhost:27017/Blog'

MongoClient.connect(urlDb, (err, db) => {
  assert.equal(err, null)
  console.log('connected to DB')
  global.db = db
})
