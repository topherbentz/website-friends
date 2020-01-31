const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const serverUser = 'websiteFriendsUser';
const serverPassword = 'iXvVA4SGSq4L0jMp';
const serverUrl = `mongodb+srv://${serverUser}:${serverPassword}@cluster0-dr3nv.azure.mongodb.net/test?retryWrites=true&w=majority&useUnifiedTopology=true`;
const dbName = 'website-friends';
let db;

const port = process.env.PORT || 5000;

mongoClient.connect(serverUrl, (err, database) => {
  if (err)  {
    return console.log(err);
  }

  db = database.db(dbName);
  router.listen(port, () => console.log(`Listening on port ${port}`));
});

const router = express();


router.get('/get_matchups*', (req, res) => {
  db.collection('matchup')
  .find({
    $and : [{
      $or :[
        { "home_team.team_id": { $regex : `^${req.query.city}.*$`, $options: 'i' } },
        { "away_team.team_id": { $regex : `^${req.query.city}.*$`, $options: 'i' } },
      ]},
      {"sport_id": { $regex: `^${req.query.sport}.*$`, $options: 'i' }
    }]
  })
  .toArray(function(err, results) {
    if (err) {
      console.log(err);
    };

    res.send(results);
  });
});

if (process.env.NODE_ENV === "production") {
  router.use(express.static(path.resolve(__dirname, "../prod-frontend")));

  router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../prod-frontend","index.html"))
  });

}
