pretty-readme
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/pretty-readme.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pretty-readme
[downloads-image]: http://img.shields.io/npm/dm/pretty-readme.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/pretty-readme
[david-image]: http://img.shields.io/david/chunpu/pretty-readme.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/pretty-readme

[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]
[![Gitter][gitter-image]][gitter-url]

Generate pretty readme for your repo using package.json

Installation
---

```sh
npm i pretty-readme -g
```

Usage
---

```sh
pretty-readme
```

Options
---

```sh
pretty-readme --input-file .README.md --output-file README.md
```

Advanced
---

Write your custom readme in `.readme.md`, `pretty-readme` will insert `.readme.md` before `License`

#### Support options

- [coveralls](https://coveralls.io)
- [gittip](https://gratipay.com)
- [gitter](https://gitter.im)

```sh
pretty-readme --coveralls --gittip --gitter
```

License
---

[![License][license-image]][license-url]

[travis-image]: https://img.shields.io/travis/chunpu/pretty-readme.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/pretty-readme
[coveralls-image]: https://img.shields.io/coveralls/chunpu/pretty-readme/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chunpu/pretty-readme
[gittip-image]: https://img.shields.io/gittip/chunpu.svg?style=flat-square
[gittip-url]: https://www.gittip.com/chunpu/
[gitter-image]: https://badges.gitter.im/chunpu/pretty-readme.svg
[gitter-url]: https://gitter.im/chunpu/pretty-readme
[license-image]: http://img.shields.io/npm/l/pretty-readme.svg?style=flat-square
[license-url]: #
