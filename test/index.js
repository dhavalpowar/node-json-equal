var should = require('chai').should(),
    equal  = require('../index');

var optsUnordered = { arrayOrder : false };

describe('Running equality tests', function() {
    it('checks if numbers are equal', function() {
        var a = 1;
        var b = 1;
        equal(a, b).should.equal(true);

    });

    it('checks if strings are equal', function() {
        var a = ' A simple string with spaces';
        var b = ' A simple string with spaces';
        equal(a, b).should.equal(true);
    });

    it('checks if empty objects are equal', function() {
        var a = {};
        var b = {};
        equal(a, b).should.equal(true);
    });

    it('checks if non empty objects are equal', function() {
        var a = { a: 1, b: 'some string' };
        var b = { b: 'some string', a: 1 };
        equal(a, b).should.equal(true);
    });

    it('checks if empty arrays are equal', function() {
        var a = [];
        var b = [];
        equal(a, b).should.equal(true);
    });

    it('checks if simple arrays (ordered) are equal', function() {
        var a = [1, 2, 3, 'some string'];
        var b = [1, 2, 3, 'some string'];
        equal(a, b).should.equal(true);
    });

    it('checks if simple arrays (unordered) are equal', function() {
        var a = [1, 2, 3, 'some string'];
        var b = [3, 1, 'some string', 2];
        equal(a, b, optsUnordered).should.equal(true);
    });

    it('checks if complex arrays (ordered) are equal', function() {
        var a = [
            {
                a : 'some \n string',
                b : 10.31
            },
            {
                x : /^some_regex/,
                y : 10
            }
        ];
        var b = [
            {
                a : 'some \n string',
                b : 10.31
            },
            {
                x : /^some_regex/,
                y : 10
            }
        ];
        equal(a, b).should.equal(true);
    });

    it('checks if complex arrays (unordered) are equal', function() {
        var a = [
            {
                y : [
                    {
                        r : {
                            'r_string' : 'some string'
                        },
                        s : {
                            's_number' : 356.32
                        }
                    },
                    {
                        m : {
                            'm_string' : 'another long string',
                        },
                        n : {
                            'n_number' : 32323.21
                        }
                    }
                ],
                x : /^some_regex/
            },
            {
                a : 'some \n string',
                b : 10.31
            }
        ];
        var b = [
            {
                a : 'some \n string',
                b : 10.31
            },
            {
                x : /^some_regex/,
                y : [
                    {
                        n : {
                            'n_number' : 32323.21
                        },
                        m : {
                            'm_string' : 'another long string',
                        }
                    },
                    {
                        s : {
                            's_number' : 356.32
                        },
                        r : {
                            'r_string' : 'some string'
                        }
                    }
                ]
            }
        ];
        equal(a, b, optsUnordered).should.equal(true);
    });

});

describe('Running inequality tests', function() {
    it('checks if numbers are unequal', function() {
        var a = 3.2;
        var b = 2.3;
        equal(a, b).should.equal(false);

    });

    it('checks if strings are unequal', function() {
        var a = ' A simple string with spaces';
        var b = 'A simple string with spaces';
        equal(a, b).should.equal(false);
    });

    it('checks if objects are unequal', function() {
        var a = {};
        var b = null;
        equal(a, b).should.equal(false);
    });

    it('checks if undefined-null objects are unequal', function() {
        var a = undefined;
        var b = null;
        equal(a, b).should.equal(false);
    });

    it('checks if non empty objects are unequal', function() {
        var a = { a: 1, b: 'some string' };
        var b = { b: 'some string', a: 1.2 };
        equal(a, b).should.equal(false);
    });

    it('checks if empty objects & arrays are unequal', function() {
        var a = [];
        var b = {};
        equal(a, b).should.equal(false);
    });

    it('checks if simple arrays (ordered) are unequal', function() {
        var a = [1, 2, 3, 'string'];
        var b = [1, 2, 3, 'some string'];
        equal(a, b).should.equal(false);
    });

    it('checks if simple arrays (unordered) are unequal', function() {
        var a = [1, 2.6, 3, 'some string'];
        var b = [3, 1, 'some string', 2];
        equal(a, b, optsUnordered).should.equal(false);
    });

    it('checks if complex arrays (ordered) are unequal', function() {
        var a = [
            {
                a : 'some \n string',
                b : 10.31
            },
            {
                x : /^some_regex/,
                y : 10.1
            }
        ];
        var b = [
            {
                a : 'some \n string',
                b : 10.31
            },
            {
                x : /^some_regex/,
                y : 10
            }
        ];
        equal(a, b).should.equal(false);
    });

    it('checks if complex arrays (unordered) are unequal', function() {
        var a = [
            {
                y : [
                    {
                        r : {
                            'r_string' : 'some string'
                        },
                        s : {
                            's_number' : 356.32
                        }
                    },
                    {
                        m : {
                            'm_string' : 'another long string',
                        },
                        n : {
                            'n_number' : 32323.21
                        }
                    }
                ],
                x : /^some_regex/
            },
            {
                a : 'some \n string',
                b : 10.31
            }
        ];
        var b = [
            {
                a : 'some \n string',
                b : 10.3
            },
            {
                x : /^some_regex/,
                y : [
                    {
                        n : {
                            'n_number' : 32323.21
                        },
                        m : {
                            'm_string' : 'another long string',
                        }
                    },
                    {
                        s : {
                            's_number' : 356.32
                        },
                        r : {
                            'r_string' : 'some string'
                        }
                    }
                ]
            }
        ];
        equal(a, b, optsUnordered).should.equal(false);
    });
});
