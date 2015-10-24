var express = require('express');
var router = express.Router();

var Controller = require('./../Controller');

/* GET home page. */
router.get('/', function(req, res, next) {
	Controller.retrieve(req,res);
});


/* GET cerveja certa */
router.get('/:id', function(req, res, next) {
	Controller.get(req,res);
});

/* CRIANDO */

router.post('/', function(req, res, next) {
	Controller.create(req, res);
});

/* ATUALIZANDO */

router.put('/:id', function(req, res, next) {
	Controller.update(req, res);
});

/*delete*/

router.delete('/:id', function(req, res, next) {
	Controller.delete(req, res);
});

module.exports = router;
