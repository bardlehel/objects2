var model = require('../models/UserModel.js');

/**
 * CategoryController.js
 *
 * @description :: Server-side logic for managing Categorys.
 */
module.exports = {

    /**
     * usersController.list()
     */
    list: function(req, res) {
        model.find().limit(100).exec(function(err, user) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting users.'
                });
            }
            return res.json(user);
        });
    },

    /**
     * userController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        model.findOne({ _id: id }, function(err, user) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting users.'
                });
            }
            if (!user) {
                return res.json(404, {
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },


    create: function(req, res) {
        var user = new model({
            email: req.body.email,
            password: req.body.password,
            joinDate: Date.now()
        });

        user.save(function(err, User) {
            if (err) {
                return res.json(500, {
                    message: 'Error saving Category',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: User._id
            });
        });
    }
};