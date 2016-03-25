var express = require('express')
var router = express.Router()

var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

var childArgs = [
  'app/chart/d3Chart.js'
]

router.get('/chart', function(req, res){
	
	res.set('Content-Type', 'image/svg+xml')

	var child = childProcess.spawn(phantomjs.path, childArgs)

	child.stdout.on('data', function (data) {
		console.log('stdout: ',data.toString())
		res.write(data)
	});

	child.stderr.on('data', function (data) {
	  	console.log('stderr: ',data.toString())
	  	res.write(data)
	});
	
	child.on('exit', function (exitCode) {
		if(exitCode !== 0) {
	    	console.log("Child exited with code: " + exitCode)
		} else {
			console.log('clean exit, do something //TODO')
		}
	    res.end()
	});
	
})

module.exports = router;

