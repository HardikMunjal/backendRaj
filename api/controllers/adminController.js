//var authModel = require('../models/authModel');

const json2csv = require('json2csv');
const fs = require('fs');


var auth = {

  extractUsers: function(req, res, next) {
   
   
    var json=req.body;
    // if(!req.body.email || !req.body.password){
    //    var message = "Mandatory parameters are missing in User";
    //    return res.status(400).send(message);
    // }

    console.log(json);

    if(req.body){
      res.json('Data Recieved');
    }else{
      res.json('No Data Recieved');
    }
    

    json2csv({data: json, fields: ['email']}, function(err, csv) {
      if (err) console.log(err);
      fs.writeFile('file.csv', csv, function(err) {
        if (err) throw err;
        console.log('file saved');
      });
    });

   console.log(data);
  }
  

  
}
module.exports = auth;