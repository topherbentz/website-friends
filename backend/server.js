const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const serverUser = 'websiteFriendsUser';
const serverPassword = 'iXvVA4SGSq4L0jMp';
const serverUrl = `mongodb+srv://${serverUser}:${serverPassword}@cluster0-dr3nv.azure.mongodb.net/test?retryWrites=true&w=majority&useUnifiedTopology=true`;
const dbName = 'website-friends';
let db;

mongoClient.connect(serverUrl, (err, client) => {
  if (err)  {
    return console.log(err);
  }

  db = client.db(dbName);
  router.listen(port, () => console.log(`Listening on port ${port}`));
});

const router = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  router.use(express.static(path.resolve(__dirname, "../prod-frontend")));

  router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"index.html"))
  });

} else {
  router.get('/', (req, res) => {
    db.collection('matchup').find().toArray(function(err, results) {
      if (err) {
        console.log(err);
      };

      res.send(results);
    });
  });
}
