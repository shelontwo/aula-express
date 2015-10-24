var express = require('express');
var router = express.Router();

var Controller = require('./../Controller');

/* GET home page. */
router.get('/', function(req, res, next) {
	Controller.retrieve(req,res);
});

/* CRIANDO */

router.post('/', function(req, res, next) {
	Controller.create(req, res);
});


module.exports = router;
