var prettyReadme = require('./')
var assert = require('assert')
var fs = require('fs')
var path = require('path')

var readme = fs.readFileSync(path.resolve(__dirname, 'readme.md'), 'utf8')
assert.equal(prettyReadme().trim(), readme.trim())

console.log('test pass!')
