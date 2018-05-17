var error = require('./error');

var adminCtlr = require('../api/controllers/adminController');
var fs = require("fs");

path = require('path');


module.exports = function (app) {
    //app.all('*',authCtlr.captureSession);
    
    app.post('/extract/users', adminCtlr.extractUsers);//, authCtrl.roleInjector)
}
