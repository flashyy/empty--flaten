'use strict';

function double_to_one(collection) {

       collection = collection.join(",").split(",");
       for(var i=0;i<collection.length;i++)
       {   
          collection[i] = parseInt(collection[i]);
       }
       var res = new Array();
       var json = {}; 
       for(var i = 0; i < collection.length; i++){
         if(!json[collection[i]]){
           res.push(collection[i]);
           json[collection[i]] =1;
         }
       }
     return res;
}

module.exports = double_to_one;
