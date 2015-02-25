#!/usr/bin/env node
require('../')(process.argv.slice(2)).then(function(readme) {
	console.log(readme)
}, function(err) {
	console.error(err.stack)
})
