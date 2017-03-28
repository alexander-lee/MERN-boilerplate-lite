var express = require('express');
var router = express.Router();

var User = require('../models/User');

// You don't really need "next" unless you have middleware, but I'll keep it in here to show it exists
router.get('/api/user', function(req, res) {
  User.find({}, function(err, users) {
    console.log(err, users);
    if(!err) {
      res.status(200).send({
        users: users
      });
    } else {
      res.status(400).send({
        error: err
      });
    }
  })
});

router.get('/api/user/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(!err) {
      res.status(200).send({
        user: user
      });
    } else {
      res.status(400).send({
        error: err
      });
    }
  });
});

router.post('/api/user', function(req, res) {
  var body = req.body;

  // Create a new User Object
  var user = new User();

  // Set our Parameters
  user.username = body.username;
  // NOTE: This is a terrible practice! You need to use PassportJS to hash your passwords
  user.password = body.password;

  user.save(function(err) {
    if(!err){
      res.status(200).send({
        user: user
      });
    }
    else {
      res.status(400).send({
        error: err
      });
    }
  });
});

router.put('/api/user/:id', function(req, res) {
  var body = req.body;
  // Find the user by the id (specified by the request), then edit the properties you want
  User.findById(req.params.id, function(err, user) {
    if(!err) {
      // You can probably write a much better function where you iterate all the keys in req.body
      // then you update the keys that you want
      user.username = body.username;
      user.password = body.password;

      user.save(function(err) {
        if(!err) {
          res.status(200).send({
            user: user
          });
        }
        else {
          // You can see how the code gets repetitive with just callbacks
          res.status(400).send({
            error: err
          })
        }
      });
    }
    else {
      res.status(400).send({
        error: err
      })
    }
  });
});

router.delete('/api/user/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if(!err) {
      // We could also send the user if we wanted to, but we just deleted it,
      // so it wouldn't even be in our database
      res.status(200).send();
    }
    else {
      res.status(400).send({
        error: err
      });
    }
  })
});

module.exports = router;
