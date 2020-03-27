let express = require('express')

var app = express()
var port = process.env.port || 3000

let mongoose = require('mongoose')
let Task = require('./models/Task')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tasks');

bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/taskRoutes')
routes(app)

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port)
console.log('task API started on: ' + port);