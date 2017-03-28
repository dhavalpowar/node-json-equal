
/**
 * A better option to check if type of objects
 * Inspired by https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
 * 
 * @param {*} obj - Object who's type is to be determined
 */
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

/**
 * Compare if two arrays are equal
 * 
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @param {Object} opts - Option if array order is to be maintained
 */
function eqArr(arr1, arr2, opts) {
    // Check if arrays have same length
    if(arr1.length !== arr2.length) return false;

    // order maintained
    if(opts.arrayOrder) {
        for(var i in arr1) {
            if(!eq(arr1[i], arr2[i], opts)) {
                return false;
            }
        }
    // irrespective of the order
    } else {
        // Map stores already matched info.
        var matchedMap = {};
        for(var i in arr1) {
            var matched = false;
            for (var j in arr2) {
                // Check for object equality recursively.
                if(eq(arr1[i], arr2[j], opts) && !matchedMap[j]) {
                    matchedMap[j] = true;
                    matched = true;
                    break;
                }
            }
            if(!matched) return false;
        }
    }

    return true;
}


/**
 * Recursively check equality of two JavaScript objects.
 * Elements in an array need not be in the same order.
 * Inspired by deep-equal https://github.com/substack/node-deep-equal
 *
 * @param {*} a - An object to compare
 * @param {*} b - An object to compare against.
 */
function eq(a, b, opts) {
    if(arguments.length < 2) return false;
    if(!opts || opts.arrayOrder === 'undefined') {
        opts = opts || {};
        opts.arrayOrder = true;
    }

    if (isNaN(a) &&
            isNaN(b) &&
            typeof a === 'number' &&
            typeof b === 'number') {
        return true;
    }

    if(a === b) {
        return true;
    }

    if((a instanceof Date && b instanceof Date) ||
            (a instanceof RegExp && b instanceof RegExp) ||
            (a instanceof String && b instanceof String) ||
            (a instanceof Number && b instanceof Number)) {
        return a.toString() === b.toString();
    }

    // Checking for undefined or non-objects
    if (!a || !b || typeof a != 'object' && typeof b != 'object') {
        return a === b;
    }
    
    if(Array.isArray(a) && Array.isArray(b)) { 
        return eqArr(a, b, opts);
    }    

    if( a === null || a === undefined  || b === null || b === undefined) {
        return false;
    }

    try {
        let ka = Object.keys(a),
            kb = Object.keys(b);

        if (ka.length != kb.length)
            return false;

        ka.sort();
        kb.sort();

        for (i = ka.length - 1; i >= 0; i--) {
            if (ka[i] != kb[i])
                return false;
        }

        for (i = ka.length - 1; i >= 0; i--) {
            key = ka[i];
            if (!eq(a[key], b[key], opts)) return false;
        }
    } catch (e) {
        return false;
    }

    return toType(a) === toType(b);
}

module.exports = eq;
