node-json-equal
===============

Determine deep equality between JSON-like JavaScript objects.
This module is heavily inspired by [deep-equal] (https://github.com/substack/node-deep-equal "deep-equal").
Other inspiration is 

## Installation

    npm install node-json-equal

## Usage
```javascript
    var equal = require('node-json-equal');

    equal (a, b, opts);

    // Array order aware
    equal (
        [ { a: 1, b: 'first '}, { c: 'second', d: null } ],
        [ { b: 'first', a: 1}, { d: null,  c: 'second'} ]
    ); // true

   
    // Array order unaware
    equal (
        [ { c: 'second', d: null }, { a: 1, b: 'first'} ],
        [ { b: 'first', a: 1}, { d: null,  c: 'second'} ],
        { arrayOrder: false }
    ); // true

    // Array order unaware
    equal (
        [ { c: 'second', d: undefined }, { a: 1, b: 'first'} ],
        [ { b: 'first', a: 1}, { d: null,  c: 'second'} ],
        { arrayOrder: false }
    ); // false
 ```

 For more examples, check out [tests](./tests/index.js)

## Tests

    npm test

## Contributing

    In lieu of a formal styleguide, take care to maintain the existing coding style.
    Add unit tests for any new or changed functionality. Lint and test your code.

## License

    ### [MIT](./LICENSE) ###
 
## Release History

* 0.1.0 Initial Release

