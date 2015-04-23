var express = require('express');
var router = express.Router();
var db = require('../../config/db');
var User = require('../models/user');

router.get('/user', function(req, res) {
    var user = new User({name: 'dpajsdpjasd', userID: 123123, phone: 222333444});
    res.json(
        user
    );
});

router.post('user/save', function(req, res) {

});

module.exports = router;
