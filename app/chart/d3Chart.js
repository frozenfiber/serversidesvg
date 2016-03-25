var d3 = require('d3')

var page = require('webpage').create()
page.viewportSize = { width: 400, height : 400 }
page.content = '<html><body></body></html>'

try {
	var lineData = [ { "x": 10,   "y": 15},  { "x": 20,  "y": 20},
                  { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                  { "x": 80,  "y": 35},  { "x": 100, "y": 60},
                  { "x": 120,  "y": 25},  { "x": 140, "y": 60},
                  { "x": 160,  "y": 15},  { "x": 180, "y": 60},
                  { "x": 200,  "y": 100},  { "x": 220, "y": 60}]
 
 	var lineFunction = d3.svg.line()
		.x(function(d) { return d.x; })
		.y(function(d) { return d.y; })
		.interpolate("linear")

	var svg = d3.select('body').append('svg')
		.attr('xmlns', d3.ns.prefix.svg)
		.attr('xmlns:xlink', d3.ns.prefix.xlink)
		.attr("width", 400)
		.attr("height", 400)

	var lineGraph = svg.append("path")
		.attr("d", lineFunction(lineData))
		.attr("stroke", "red")
		.attr("stroke-width", 2)
		.attr("fill", "none")

	console.log(document.documentElement.outerHTML) //This is required to send the HTML back through response

    phantom.exit(0)
}catch(e) {
	console.error(e)
	phantom.exit(1)
}
