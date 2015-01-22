#!/usr/bin/env node
var readme = require('../')(process.argv.slice(2))
console.log(readme)
