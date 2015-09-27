var model = require('../models/CategoryModel.js');

/**
 * CategoryController.js
 *
 * @description :: Server-side logic for managing Categorys.
 */
module.exports = {

    /**
     * CategoryController.list()
     */
    list: function(req, res) {
        model.find(function(err, Categorys){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Category.'
                });
            }
            return res.json(Categorys);
        });
    },

    /**
     * CategoryController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, Category){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Category.'
                });
            }
            if(!Category) {
                return res.json(404, {
                    message: 'No such Category'
                });
            }
            return res.json(Category);
        });
    },

    /**
     * CategoryController.create()
     */
    create: function(req, res) {
        var Category = new model({			names : req.body.names,			parents : req.body.parents,			properties : req.body.properties,			votes : req.body.votes
        });

        Category.save(function(err, Category){
            if(err) {
                return res.json(500, {
                    message: 'Error saving Category',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: Category._id
            });
        });
    },

    /**
     * CategoryController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, Category){
            if(err) {
                return res.json(500, {
                    message: 'Error saving Category',
                    error: err
                });
            }
            if(!Category) {
                return res.json(404, {
                    message: 'No such Category'
                });
            }

            Category.names =  req.body.names ? req.body.names : Category.names;			Category.parents =  req.body.parents ? req.body.parents : Category.parents;			Category.properties =  req.body.properties ? req.body.properties : Category.properties;			Category.votes =  req.body.votes ? req.body.votes : Category.votes;			
            Category.save(function(err, Category){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting Category.'
                    });
                }
                if(!Category) {
                    return res.json(404, {
                        message: 'No such Category'
                    });
                }
                return res.json(Category);
            });
        });
    },

    /**
     * CategoryController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function(err, Category){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Category.'
                });
            }
            return res.json(Category);
        });
    }
};