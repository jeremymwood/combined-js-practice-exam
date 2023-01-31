"use strict";

//q1
function isBoolean(x) {
    if(typeof x === "boolean") {
        return true;
    } else {
        return false;
    }
};
// console.log(isBoolean(42)); // outputs false
// console.log(isBoolean("true")); // outputs false
// console.log(isBoolean(false)); // outputs true

//q2
function hasBoolean(x) {
    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
        if (typeof x[i] === "boolean") {
            return true;
        } else {
            return false;
        }
        console.log(typeof [i]);
    }
};
console.log(hasBoolean([1, 2, 3, 4])); // outputs false
// console.log(hasBoolean([1, "false", 3, 4])); // outputs false
// console.log(hasBoolean([1, 2, true, 4])); // outputs true

// q3
const people = [ {
    name: "Bob",
    age: 42
}, {
    name: "Sue",
    age: 27
}, {
    name: "Lou",
    age: 33
}, {
    name: "Zanzibar",
    age: 18
}, {
    name: "Gladys",
    age: 39
}
];

function minAge(people) {
    let lowestAge = people[0].age;
    for (const person of people) {
        if (lowestAge < person.age) {
            // lowestAge =
            // console.log(lowestAge);
        } else {
            lowestAge = person.age;
            // console.log(person.age);
        }
    }
    return lowestAge;
}
// minAge(people);
console.log(minAge(people)); // outputs 18


/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
