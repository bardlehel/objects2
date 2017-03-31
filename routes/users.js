var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');

/*
 * GET LIST
 */
router.get('/', function(req, res) {
    controller.list(req, res);
});

/*
 * GET SINGLE
 */
router.get('/:id', function(req, res) {
    controller.show(req, res);
});

/*
 * UPDATE user
 */
router.put('/:id',
    passport.authenticate('basic', { session: false }),
    function(req, res) {
        controller.update(req, res);
    });


module.exports = router;