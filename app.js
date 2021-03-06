const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
//const session = require('express-session');
const request = require('request');
const cors_sec = require('./routes/corsheaders')




const http = require('http').Server(app);


// Middlewares for HTTP Request and cors handlers
app.use('/', cors_sec.CrossOriginHeaders);


app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser({ keepExtensions: true, uploadDir: '/uploads' }));
app.use(bodyParser.json({ 
 	limit: '100mb'
    })); 
    // app.use(cookieParser('1a2b3c4d5e6f'));
    // app.use(session({
    //     cookie: {
    //         maxAge: 31536000000
    //     },
    //     secret: 'alskdjf2452klj42lkh24lk4j2l',
    //     saveUninitialized: false
    // }));

// app.use(express.static(__dirname + '/Images'));
// app.set('views', __dirname + '/public/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.use(router);
require('./routes')(router);



process.on('uncaughtException', function(err,req,res) {
  console.log('Caught unhandled exception: ' + err);
  //process.exit(1);
  });

const server = http.listen(8008, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s',host, port);
});




 

  
   