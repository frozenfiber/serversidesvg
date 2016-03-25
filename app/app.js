var express    = require('express')
var app        = express()                 
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/views'))

var port = process.env.PORT || 3000

var routes = require('./routes')
app.use(routes)

app.listen(port)
console.log('Listening on port ' + port)

