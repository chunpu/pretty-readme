pretty-readme@1.2.4
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

generate pretty readme for your repo using package.json

Installation
---

```sh
npm install pretty-readme -g
```

Usage
---

```sh
pretty-readme > readme.md
```

Advanced
---

Write your custom readme in `_readme.md`, `pretty-readme` will insert _readme.md before `License`

#### Support options

- coveralls
- gittip

```sh
pretty-readme coveralls gittip
```

License
---

ISC

[npm-image]: https://img.shields.io/npm/v/pretty-readme.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pretty-readme
[travis-image]: https://img.shields.io/travis/chunpu/pretty-readme.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/pretty-readme
[downloads-image]: http://img.shields.io/npm/dm/pretty-readme.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/pretty-readme
