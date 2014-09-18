'use strict';


function Movie(){
}

Object.defineProperty(Movie, 'collection', {
  get: function(){return global.mongodb.collection('movies');}
});

Movie.create = function(o, cb){
  Movie.collection.save(o, cb);
};


module.exports = Movie;

