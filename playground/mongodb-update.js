// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server..');
  }
  console.log('Connected to MongoDB server..');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b02d421773d6f5bd62e36cf')
  // }, {
  //   $set: {completed: true}
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Reyaansh Mane'
  }, {
    $set: {name: 'Kiran Mane'},
    $inc: {age: 30}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
