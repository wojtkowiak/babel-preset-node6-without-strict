# Babel 6.x presets for Node 5.x (updated regularly!)

Node 5.x brings ~59% [native ES6/ES2015 coverage](https://nodejs.org/en/docs/es6/). This preset for Babel 6 attempts
to bridge the gap for the much of the remaining 41% using [Babel plug-ins](https://github.com/babel/babel/tree/master/packages).

## Motivation

Babel 6.x is awesome, but simply including the [ES2015 preset](https://www.npmjs.com/package/babel-preset-es2015) means you're transpiling features
that your Node 5.x installation can already do faster and natively, replacing them with inferior / old code.

This preset complements existing V8-native functionality - it doesn't work _around_ it.

The end result is nearly always a faster build and script execution time.

## Key features:

* Flow support (removes types) via [babel-plugin-transform-flow-strip-types](https://www.npmjs.com/package/babel-plugin-transform-flow-strip-types)
* Strict mode, to enable Classes and `let` (via [babel-plugin-transform-strict-mode](https://www.npmjs.com/package/babel-plugin-transform-strict-mode))
* CommonJS import/export module syntax ([babel-plugin-transform-es2015-modules-commonjs](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-commonjs))
* [Destructuring](http://www.2ality.com/2015/01/es6-destructuring.html) (via [babel-plugin-transform-es2015-destructuring](https://www.npmjs.com/package/babel-plugin-transform-es2015-destructuring))
* Default and rest parameters (via [babel-plugin-transform-es2015-parameters](https://www.npmjs.com/package/babel-plugin-transform-es2015-parameters))
* Sticky RegEx (via [babel-plugin-transform-es2015-sticky-regex](https://www.npmjs.com/package/babel-plugin-transform-es2015-sticky-regex))
* Unicode RegEx (via [babel-plugin-transform-es2015-unicode-regex](https://www.npmjs.com/package/babel-plugin-transform-es2015-unicode-regex))

**Note: This package originally shipped with the React preset, but to avoid bloat, doesn't any longer. If you want to add that, please install [babel-preset-react](https://www.npmjs.com/package/babel-preset-react) too**

## Usage instructions

## Installation

Install via NPM the usual way:

`npm i babel-preset-node5`

## Usage

### Via `.babelrc` (recommended)

Create a `.babelrc` file in your project root, and include 'node5' in your preset path:

```
{
  "presets": [
    "node5"
  ]
}
```

Now whenever you run `babel-node`, it will polyfill your app with the ES2015 features that Node 5 is missing.

### Via CLI
`$ babel script.js --presets node5`

### Via Node API
```
require("babel-core").transform("code", {
  presets: ["node5"]
});
```

### Webpack, Gulp, Browserify, etc

Follow vendor instructions and include `node5` in your babel "preset" list.

## How to add React support

Babel has a ready-made preset for React, and you now need to install it separately.

Just grab it via NPM:

`npm i babel-preset-react`

And then add it to your "presets" list in `.babelrc`:

```
{
  "presets": [
    "node5",
    "react"
  ]
}
```

## No longer tracking Babel 6 versions

This package originally tracked Babel 6.x versioning.  The problem is, many of the plug-ins and transforms provided by Babel don't always track the the `babel-core` version, so updating one dependency can throw the versioning schema off.

This package will instead now follow its own semver, starting (arbitrarily) at v10.0.0.

I'm using this repo in production, so you can be assured that I'm making it a priority to update Babel 6 deps regularly and track the latest plug-in versions.
