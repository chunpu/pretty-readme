var fs = require('mz/fs')
var ejs = require('ejs')
var path = require('path')
var url = require('url')
var co = require('co')
var _ = require('min-util')
var debug = require('debug')('pretty-readme')

var badgeList = 'coveralls gittip gitter'.split(' ')

module.exports = exports = render

function render(program) {
	program = program || {}
	return co(function* () {
		var data = yield initParam(program)
		var inputFile = program.inputFile || '.README.md'
		var outputFile = program.outputFile || 'README.md'
		var template = yield fs.readFile(path.resolve(__dirname, 'template.ejs'), 'utf8')
		var readme = yield fs.readFile(inputFile, 'utf8')
		data = _.extend({}, data, {
			readme: readme.trim()
		})
		debug('data: %o', data)
		var outputData = ejs.render(template, data)
		yield fs.writeFile(outputFile, outputData)
		return outputData
	})
}

exports.initParam = initParam

function initParam(program) {
	program = program || {}
	return co(function* () {
		var pkg = yield readPackageJson()

		// github
		var github = yield getGithub()
		if (github) {
			var branch = yield getBranch()
			var arr = github.split('/')
			github = {
				  url: github
				, repo: arr.pop().replace('.git', '')
				, user: arr.pop()
				, branch: branch || 'master'
			}
			github.path = github.user + '/' + github.repo
		}
		debug('github: %o', github)

		// badges
		var badges = {}
		_.each(badgeList, function(badge) {
			if (program[badge]) {
				badges[badge] = program[badge]
			}
		})
		_.extend(badges, yield {
			  travis: hasTravis()
		})
		debug('badges: %o', badges)
		
		var data = _.extend({}, pkg, {
			  github: github
			, badges: badges
			, hasLicense: yield hasLicense()
		})
		return data
	})
}

function readPackageJson() {
	return fs.readFile('package.json').then(function(val) {
		return JSON.parse(val)
	})
}

function hasTravis() {
	return fs.exists('.travis.yml')
}

function hasLicense() {
	return fs.exists('LICENSE')
}

function getBranch() {
	return fs.readFile('.git/HEAD', 'utf8').then(function(val) {
		return val.split('/').pop().trim()
	})
}

function getGithub() {

	return fs.exists('.git').then(function(val) {
		if (val) {
			return fs.readFile('.git/config', 'utf8').then(function(config) {
				// e.g.
				// git@github.com:chunpu/pretty-readme.git
				// https://github.com/chunpu/pretty-readme
				var reg = /github.com.*[\w-]+\/[\w-]+/
				var matched = reg.exec(config)
				if (matched) {
					return matched[0].replace(':', '/')
				}
			})
		}
	})
}
