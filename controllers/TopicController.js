var model = require('../models/TopicModel.js');

/**
 * TopicController.js
 *
 * @description :: Server-side logic for managing Topics.
 */
module.exports = {

    /**
     * TopicController.list()
     */
    list: function(req, res) {
        model.find(function(err, Topics){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Topic.'
                });
            }
            return res.json(Topics);
        });
    },

    /**
     * TopicController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, Topic){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Topic.'
                });
            }
            if(!Topic) {
                return res.json(404, {
                    message: 'No such Topic'
                });
            }
            return res.json(Topic);
        });
    },

    /**
     * TopicController.create()
     */
    create: function(req, res) {
        var Topic = new model({			names : req.body.names,			is : req.body.is,			has : req.body.has,			votes : req.body.votes
        });

        Topic.save(function(err, Topic){
            if(err) {
                return res.json(500, {
                    message: 'Error saving Topic',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: Topic._id
            });
        });
    },

    /**
     * TopicController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, Topic){
            if(err) {
                return res.json(500, {
                    message: 'Error saving Topic',
                    error: err
                });
            }
            if(!Topic) {
                return res.json(404, {
                    message: 'No such Topic'
                });
            }

            Topic.names =  req.body.names ? req.body.names : Topic.names;			Topic.is =  req.body.is ? req.body.is : Topic.is;			Topic.has =  req.body.has ? req.body.has : Topic.has;			Topic.votes =  req.body.votes ? req.body.votes : Topic.votes;			
            Topic.save(function(err, Topic){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting Topic.'
                    });
                }
                if(!Topic) {
                    return res.json(404, {
                        message: 'No such Topic'
                    });
                }
                return res.json(Topic);
            });
        });
    },

    /**
     * TopicController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function(err, Topic){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Topic.'
                });
            }
            return res.json(Topic);
        });
    }
};