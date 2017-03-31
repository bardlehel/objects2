var express = require('express');
var router = express.Router();
var controller = require('../controllers/languageController.js');
var passport = require('passport');

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
router.post('/',
    passport.authenticate('basic', { session: false }),
    function(req, res, next) {
        controller.create(req, res);
    });

/*
 * PUT
 */
router.put('/:id',
    passport.authenticate('basic', { session: false }),
    function(req, res) {
        //controller.update(req, res);
    });


module.exports = router;