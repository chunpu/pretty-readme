var render = require('./')
var assert = require('assert')

describe('init param', function() {

	it('should have github info', function(done) {
		render.initParam().then(function(pkg) {
			var github = pkg.github
			//console.log(github)
			if (github) {
				assert('chunpu' == github.user)
				assert('pretty-readme' == github.repo)
				//assert('master' == github.branch) // branch is fuxked by hash in travis
				assert('chunpu/pretty-readme' == github.path)
			}
			done()
		}, function(err) {
			if (err) {
				console.error(err.stack)
				assert(false)
				done()
			}
		})
	})

	it('should get badge info', function() {
		return render.initParam().then(function(data) {
			assert.deepEqual(data.badges, {
				travis: true
			})
		})
	})

	it('can custom badges', function(done) {
		render.initParam({coveralls: true, gittip: true}).then(function(pkg) {
			assert.deepEqual(pkg.badges, {
				  travis: true
				, coveralls: true
				, gittip: true
			})
			done()
		})
	})
})

describe('render readme', function() {
	it('should contains Usage', function(done) {
		render().then(function(val) {
			assert(/Usage/.test(val))
			done()
		})
	})
})
