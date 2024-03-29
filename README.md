
# array-filter

`Array#filter` for older browsers.

[![build status](https://secure.travis-ci.org/juliangruber/array-filter.png)](http://travis-ci.org/juliangruber/array-filter)
[![downloads](https://img.shields.io/npm/dm/array-filter.svg)](https://www.npmjs.org/package/array-filter)

## Usage

```js
var filter = require('array-filter');

var array = [1, 2, 3];
console.log(filter(array, function (el, i, arr) {
  return false; // I throw it on the ground!
}));
// => []
```

## API

### filter(arr, fn[, self])

Return an array with elements of `arr` for which `fn` returns a truthy value. `fn` is called with

* `el`: The current element
* `i`: The element's index
* `arr`: The whole array

Optionally pass in `self` as the `this` value for `fn`.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install array-filter
```

Then bundle for the browser with [browserify](https://github.com/substack/browserify).

## Security contact information

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure.

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
