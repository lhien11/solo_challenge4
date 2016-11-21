var router = require('express').Router(); // DO NOT MODIFY
var pg = require('pg'); // DO NOT MODIFY

var config = {
  database: 'sigma', // change this if needed
};

var pool = new pg.Pool(config); // DO NOT MODIFY

// GET /treats
router.get('/', function (req, res) {

  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }
    if (req.query.q) {
      // It's the eye of the tiger, it's the thrill of the fight
        var search = req.query.q;
        pool.connect(function (err, client, done) {
          if (err) {
            console.log('Error connecting to the DB', err);
            res.sendStatus(500);
            done();
            return;
          }
          client.query('SELECT * FROM treats WHERE name=$1;', [search], function (err, result) {
            done();
            if (err) {
              console.log('Error querying the DB', err);
              res.sendStatus(500);
              return;
            }
            console.log('Got rows from the DB:', result.rows);
            res.send(result.rows);
          });
        });
    } else {
      client.query('SELECT * FROM treats;', function (err, result) {
        done();
        if (err) {
          console.log('Error querying the DB', err);
          res.sendStatus(500);
          return;
        }

        console.log('Got rows from the DB:', result.rows);
        res.send(result.rows);
      });
    }

  });
});

/** ---- PUT YOUR CODE BELOW ---- **/

// POST /treats
router.post('/', function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.description, req.body.url], function (err, result) {
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});



/** ---- DO NOT MODIFY BELOW ---- **/
module.exports = router;
