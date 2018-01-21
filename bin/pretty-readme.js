#!/usr/bin/env node

var _ = require('min-util')
var program = require('commander')
var prettyReadme = require('../')

program
	.version(require('../package').version)
	.usage('[options]')
	.option('-o, --output-file [file]', 'output file default README.md')
	.option('-i, --input-file [file]', 'input file default .README.md')
	.option('--coveralls', 'use coveralls badge')
	.option('--gittip', 'use gittip badge')
	.option('--gitter', 'use gitter badge')
	.parse(process.argv)

prettyReadme(program).catch(function(err) {
	console.error(err.stack)
})
