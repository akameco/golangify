# await-err

[![Build Status](https://travis-ci.org/akameco/await-err.svg?branch=master)](https://travis-ci.org/akameco/await-err)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> handle err using await with golang style

## Install

```
$ yarn add await-err
```

## Usage

```js
const awaitErr = require('await-err')

const a = x => Promise.resolve(x)
const b = () => Promise.reject(new Error('err'))

const main = async () => {
  const [result1, err1] = await awaitErr(a)('hello')
  console.log(result1)
  // => hello

  const [result2, err2] = await awaitErr(b)()
  console.log(err2.message)
  // => err
}

main()
```

## API

### `awaitErr(func)`

#### func

Type: `function`

#### Success

return `[result, null]`

#### Failer

return `[null, err]`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/await-err/commits?author=akameco "Code") [📖](https://github.com/akameco/await-err/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/await-err/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
