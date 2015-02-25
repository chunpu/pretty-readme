var fs = require('mz/fs')
var ejs = require('ejs')
var path = require('path')
var url = require('url')
var co = require('co')
var _ = require('min-util')
var debug = require('debug')('pretty-readme')

module.exports = exports = render

function render(badges) {
	return co(function* () {
		var pkg = yield initParam(badges)
		var template = yield fs.readFile(path.resolve(__dirname, 'template.ejs'), 'utf8')
		var _readme = yield fs.readFile('_readme.md')
		template = template.replace('{{_readme}}', _readme || '')
		return ejs.render(template, pkg).trim()
	})
}

exports.initParam = initParam

function initParam(badges) {
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
				, branch: branch
			}
			github.path = github.user + '/' + github.repo
		}
		debug('github: %o', github)

		// badges
		badges = _.reduce(badges, function(prev, val) {
			prev[val] = true
			return prev
		}, {})
		_.extend(badges, yield {
			  travis: hasTravis()
		})
		debug('badges: %o', badges)
		
		_.extend(pkg, {
			  github: github
			, badges: badges
			, hasLicense: yield hasLicense()
		})
		debug('pkg: %o', pkg)
		return pkg
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
				var matched = config.match(/github.com\/.*\/.*/)
				if (matched) {
					return matched[0]
				}
			})
		}
	})
}
