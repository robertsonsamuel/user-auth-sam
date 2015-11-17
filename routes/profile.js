'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

var authMiddleware = require('../config/auth');

router.get('/', authMiddleware, function(req, res) {
  res.render('profile');
});

router.get ('/getprofile', function(req, res){
  var id = req.cookies.userId;
  User.findById(id, function(err, user){
    res.status(err ? 400 : 200).send(err ? 'update failed' : user);
  });
});

router.get('/profileEdit', authMiddleware, function(req, res) {
  res.render('profileEdit');
});

router.put('/', function(req, res){
  console.log(req.body);
  User.findByIdAndUpdate(req.body._id, req.body, function(err, user){
    res.status(err ? 400 : 200).send(err ? 'update failed' : user);
  });
});

router.delete('/profileDelete', function(req, res) {
  User.findById(req.body._id).remove(funct)
})

module.exports = router;
