var express = require('express');
var router = express.Router();
var Controller = require('./../controller');


/* GET home page. */
router.get('/', function(req, res, next) {
	Controller.list(req, res);
});
router.get('/:id', function(req, res, next) {
	Controller.especifica(req, res);
});




module.exports = router;
