var express = require('express');
var app = express();
var router1 = express.Router();
var router2 = express.Router();
var router3 = express.Router();
router1 .get('/user', function(req, res,next){
 console.log("User router reporting")
 res.send('users')
});
router2 .get('/admin', function(req, res,next){
 console.log("Admin router reporting")
 res.send('admin')
});
router2 .get('/Student', function(req, res,next){
 console.log("Student router reporting")
 res.send('student')
});
app.use (router1);
app.use (router2);
app.use (router3);
app.listen(9000);
