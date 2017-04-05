# defaults-extender

[![Build Status](https://travis-ci.org/Milewski/defaults-extender.svg?branch=master)](https://travis-ci.org/Milewski/defaults-extender)
[![npm version](https://badge.fury.io/js/defaults-extender.svg)](https://badge.fury.io/js/defaults-extender)
[![npm downloads](https://img.shields.io/npm/dm/defaults-extender.svg)](https://www.npmjs.com/package/defaults-extender)
[![dependencies](https://david-dm.org/Milewski/defaults-extender.svg)](https://www.npmjs.com/package/defaults-extender)

Fast, tiny and useful utility to extend options against defaults.

## Installation

```bash
$ npm install defaults-extender
```

## Description

Easily extend object A with object B with a few fancy features. for example:

let's say you are building a command-line interface (CLI) and you have have something like this:

```bash
$ mycli --option.enabled true
```

but what you really want to do is.. if the user only sends `--option true` set the property enabled to `true`.
if you are to tackle with the command parser itself you end up with a "if else" hell in your file... or you start to create names like `--optionEnabled true`... 

what if you could so something like this:

```js
const extend = require('defaults-extender')
//or const { extend } = require('defaults-extender')

const defaults = {
    options: {
        enabled: false,
        format: 'jpg',
        size: 1024
    }
}

let options = { options : true };

let result = extend(defaults, options);

// result in 

result = {
    options: {
        enabled: true,
        format: 'jpg',
        size: 1024
    }
}

```

so, all what you need to do is specify your defaults, and adhere to it, it will be how your final output will look like. for example this will not work:

```
const defaults = {
    options: false
}

let options = {
    options: {
        enabled: true
    }
}

let result = extend(defaults, options);

console.log(result.options.enabled) // undefined

```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install && npm test
```

## Build From Source

To build from github, first clone this repo locally then run `npm run build`:

```bash
$ npm run build
```

## License 

[MIT](LICENSE)
