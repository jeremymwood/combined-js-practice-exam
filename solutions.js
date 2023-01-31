"use strict";

function isBoolean(x) {
    if(typeof x === "boolean") {
        return true;
    } else {
        return false;
    }
};

console.log(isBoolean(42)); // outputs false
console.log(isBoolean("true")); // outputs false
console.log(isBoolean(false)); // outputs true

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
