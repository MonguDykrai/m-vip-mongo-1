const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'vip';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  // console.log(db)
  // console.log(db.collection('users'))
  const collection = db.collection('users')

  collection.insertOne({ name: 'belly' }, function (err, doc) {
    assert.equal(null, err);
    console.log(doc)

    setTimeout(function () {
      collection.find().toArray(function (err, items) {
        console.log(items)
      })
    }, 1000)

  })

  client.close();
});