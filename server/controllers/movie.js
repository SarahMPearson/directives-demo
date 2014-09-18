'use strict';

var Movie = require('../models/movie');

exports.create = function(req, res){
  Movie.create(req.body, function(err, movie){
    res.send({movie:movie});
  });
};
