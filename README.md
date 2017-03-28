node-json-equal
===============

Provides a utility to determine deep equality between JSON-like JavaScript objects.

## Installation

    npm install node-json-equal

## Usage

    var equal = require('node-json-equal');

    equal (a, b, opts);

    // Array order aware
    equal (
        [ { a: 1, b: 'first array object'}, { c: 'second array object', d: null } ],
        [ { b: 'first array object', a: 1}, { d: null,  c: 'second array object'} ]
    );
   
    // Array order unaware
    equal (
        [ { c: 'second array object', d: null }, { a: 1, b: 'first array object'} ],
        [ { b: 'first array object', a: 1}, { d: null,  c: 'second array object'} ],
        { arrayOrder: false }
    );
 
## Tests

    npm test

## Contributing

    In lieu of a formal styleguide, take care to maintain the existing coding style.
    Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial Release

