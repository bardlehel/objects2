var express = require('express');
var router = express.Router();
var controller = require('../controllers/languageController.js');

/*
 * GET
 */
router.get('/', function(req, res, next) {
    controller.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    //controller.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res, next) {
    controller.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    //controller.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    //controller.remove(req, res);
});

module.exports = router;