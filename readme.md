pretty-readme
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[npm-image]: https://img.shields.io/npm/v/pretty-readme.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pretty-readme
[downloads-image]: http://img.shields.io/npm/dm/pretty-readme.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/pretty-readme

[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Generate pretty readme for your repo using package.json

Installation
---

```sh
npm i pretty-readme -g
```

Usage
---

```sh
pretty-readme > readme.md
```

Advanced
---

Write your custom readme in `_readme.md`, `pretty-readme` will insert `_readme.md` before `License`

#### Support options

- [Coveralls](https://coveralls.io/)
- [Gittip](https://gratipay.com/)

```sh
pretty-readme coveralls gittip
```

License
---

ISC


[travis-image]: https://img.shields.io/travis/chunpu/pretty-readme.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/pretty-readme
[coveralls-image]: https://img.shields.io/coveralls/chunpu/pretty-readme/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chunpu/pretty-readme
[gittip-image]: https://img.shields.io/gittip/chunpu.svg?style=flat-square
[gittip-url]: https://www.gittip.com/chunpu/
