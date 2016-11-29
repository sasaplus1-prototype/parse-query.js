# parse-query.js

parse query string

## Installation

```sh
$ npm install sasaplus1-prototype/parse-query.js
```

## Usage

via `require()`

```js
var parseQuery = require('parse-query');
```

via `<script>`

```html
<script src="parse-query.min.js"></script>
```

### Example

```js
parseQuery('key1=value1&key2=value2&key3=value3');
// => { key1: ["value1"],  key2: ["value2"], key3: ["value3"] }

location.search;
// => "?key=a&key=b&key=c"
parseQuery(location.search.replace(/^\?/, ''));
// => { key: ["a", "b", "c"] }
```

## License

The MIT license. Please see LICENSE file.
