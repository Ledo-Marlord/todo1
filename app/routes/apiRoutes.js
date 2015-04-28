var express = require('express');
var router = express.Router();
var db = require('../../config/db');
var User = require('../models/user');

router.get('/user', function(req, res) {
    User.find(function (err, users) {
        if (err) throw err;
        if (users.length === 0) {
            var newUser = new User({name: 'Node Created User', userID: 1111, phone: 123123123});
            newUser.save(function (err) {
                if (err) throw err;
                console.log('Api router get /user created a user because none existed.');
                User.find(function (err, users) {
                    if (err) throw err;
                    res.json(
                        users
                    );
                })
            })
        } else {
            res.json(
                users
            );
        }
    });

});

router.post('/user/save', function(req, res) {
    console.log(req.body);
    var user = new User(req.body);
    user.save(function (User) {
        console.log('User ' + User.name + ' saved successfully!');
    });
});

module.exports = router;
