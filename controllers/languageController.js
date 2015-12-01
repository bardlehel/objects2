var model = require('../models/LanguageModel');

/**
 * languageController.js
 *
 * @description :: Server-side logic for managing languages.
 */
module.exports = {

    /**
     * languageController.list()
     */
    list: function(req, res) {
        model.find(function(err, languages){
            if(err) {
                return res.json(500, {
                    message: 'Error getting language.'
                });
            }
            return res.json(languages);
        });
    },

    /**
     * languageController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, language){
            if(err) {
                return res.json(500, {
                    message: 'Error getting language.'
                });
            }
            if(!language) {
                return res.json(404, {
                    message: 'No such language'
                });
            }
            return res.json(language);
        });
    },

    /**
     * languageController.create()
     */
    create: function(req, res) {

       if( req.get('Content-Type') !== 'application/json'
           || req.body.hasOwnProperty('englishName') === false) {
           return res.json(400, {
               message: 'wrong data'
           });
       }

        var language = new model(req.body);

        language.save(function(err, language){
            if(err) {
                return res.json(500, {
                    message: 'Error saving language',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: language._id
            });
        });
    },

    /**
     * languageController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, language){
            if(err) {
                return res.json(500, {
                    message: 'Error saving language',
                    error: err
                });
            }
            if(!language) {
                return res.json(404, {
                    message: 'No such language'
                });
            }

            language.englishName =  req.body.englishName ? req.body.englishName : language.englishName;
			
            language.save(function(err, language){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting language.'
                    });
                }
                if(!language) {
                    return res.json(404, {
                        message: 'No such language'
                    });
                }
                return res.json(language);
            });
        });
    },

    /**
     * languageController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function(err, language){
            if(err) {
                return res.json(500, {
                    message: 'Error getting language.'
                });
            }
            return res.json(language);
        });
    }
};