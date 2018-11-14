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

  // collection.findOne({name: 'rose'}, function (err, item) {
  //   assert.equal(null, err);
  //   console.log(item)
  // })

  collection.findOne({ phone: 18521447412 }, function (err, item) {
    assert.equal(null, err);
    /**
     * exsit: { _id: 5bebdf3bf69c1733e219f683, phone: 18521447412 }
     * otherwise: null
     */
    console.log(item) // 
  })

  client.close();
});