'use strict';

function double_to_one(collection) {
      collection = collection.join(",").split(",");
      for(var i=0;i<collection.length;i++)
      {   
          collection[i] = parseInt(collection[i]);
      }
     return collection;
}

module.exports = double_to_one;
