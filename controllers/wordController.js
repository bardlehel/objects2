var model = require('../models/WordModel.js');

/**
 * wordController.js
 *
 * @description :: Server-side logic for managing words.
 */
module.exports = {

    /**
     * wordController.list()
     */
    list: function(req, res) {
        model.find().limit(100).exec(function(err, words) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting word.'
                });
            }
            return res.json(words);
        });
    },

    /**
     * wordController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        model.findOne({ _id: id }, function(err, word) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting word.'
                });
            }
            if (!word) {
                return res.json(404, {
                    message: 'No such word'
                });
            }
            return res.json(word);
        });
    },

    /**
     * wordController.create()
     */
    create: function(req, res) {
        var word = new model({
            spelling: req.body.spelling
        });

        word.save(function(err, word) {
            if (err) {
                return res.json(500, {
                    message: 'Error saving word',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: word._id
            });
        });
    },

    /**
     * wordController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        model.findOne({ _id: id }, function(err, word) {
            if (err) {
                return res.json(500, {
                    message: 'Error saving word',
                    error: err
                });
            }
            if (!word) {
                return res.json(404, {
                    message: 'No such word'
                });
            }

            word.spelling = req.body.spelling ? req.body.spelling : word.spelling;

            word.save(function(err, word) {
                if (err) {
                    return res.json(500, {
                        message: 'Error getting word.'
                    });
                }
                if (!word) {
                    return res.json(404, {
                        message: 'No such word'
                    });
                }
                return res.json(word);
            });
        });
    },

    /**
     * wordController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function(err, word) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting word.'
                });
            }
            return res.json(word);
        });
    }
};