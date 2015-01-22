var fs = require('fs')
var ejs = require('ejs')
var path = require('path')
var util = require('util')
var url = require('url')

module.exports = function() {
    var pwd = process.cwd()
    var name = path.resolve(pwd, 'package.json')
    var str = fs.readFileSync(name, 'utf8')
    var pkg
    try {
        pkg = JSON.parse(str)
    } catch (e) {}
    if (!pkg) throw new Error('Invalid format: ' + str)
    pkg.hasTravis = hasTravis()
    try {
        pkg._readme = fs.readFileSync(path.resolve(pwd, '_readme.md'))
    } catch (e) {}
    var repo = pkg.repository
    if ('object' == typeof repo) {
        repo = repo.url
        if (/http/.test(repo)) {
            repo = url.parse(repo).pathname.replace('.git', '').substr(1)
        }
    }
    if (repo) {
        pkg.repo = repo
        var arr = repo.split('/')
        pkg.user = arr[0]
        pkg.reponame = arr[1]
    }
    //console.log(pkg)
    return render(pkg)
}

function hasTravis() {
    var travisPath = path.resolve(process.cwd(), '.travis.yml')
    return fs.existsSync(travisPath)
}

function render(pkg) {
    var pathname = path.resolve(__dirname, 'template.ejs')
    var str = fs.readFileSync(pathname, 'utf8')
    var readme = ejs.render(str, pkg)
    return readme.trim()
}
