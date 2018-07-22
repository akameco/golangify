# golangify

[![Build Status](https://travis-ci.org/akameco/await-err.svg?branch=master)](https://travis-ci.org/akameco/await-err)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> Golang like error handling for async/await

## Install

```
$ yarn add golangify
```

## Usage

```js
const go = require('golangify')

const success = x => Promise.resolve(x + x)
const failure = () => Promise.reject(new Error('err'))

const main = async () => {
  console.log(await go(success)(1))
  // => [ 2, null ]

  const [result, err] = await go(failure)()
  if (err !== null) {
    console.log(err.message)
    // => err
  }
  console.log(result)
  // => null
}

main()
```

## API

### `golangify(func)`

#### func

Type: `function`

#### Success

return `[result, null]`

#### Failure

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
