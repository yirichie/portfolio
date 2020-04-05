---
title: Immediately Invoked Function Expressions
date: "2020-02-19"
description: Or IIFE for short
---

<h3>Function Declarations vs. Function Expressions</h3>

```javascript
// Function declaration
function greeting() {
    console.log('Hello world')
}
```

A function declaration defines a function with a name and the specified parameters (if any).

```javascript
const greeting = function() {
    console.log('Hello world');
}
```

A function expression defines a function <i>without a name</i> (creating an anonymous function) and is assigned to a variable.

Another difference to note is that function declarations are hoisted while function expressions are not. You are not able to use function expressions before you define them.

Now that that's out of the way, let's go over an Immediately Invoked Function Expression (IIFE).

<h3>IIFE</h3>

An IIFE is similar to a regular function expression in that it is typically an anonymous function, with the difference being that it is immediately invoked.

```javascript
(function() {
    console.log('Hello world')
})();
// Hello world

(function() {
    console.log('Hello world')
}());
// Hello world
```

Both are valid syntaxes.

The first set of parentheses tells JavaScript to parse our code as a function expression. The second set is used to invoke the function.

<h4>When would I use this?</h4>

IIFE's are typically used for data privacy.

```javascript
(function() {
    var superSecretApiKey = 'alPastorTacos';

    // do something with superSecretApiKey
})();

console.log(superSecretApiKey);
// ReferenceError: superSecretApiKey is not defined
```

We can see that superSecretApiKey is defined within the IIFE and is not accessible outside of it due to function scope - making the variable private to the function.

You technically could create a regular function expression and achieve the same thing.

```javascript
function useApiKey() {
    var superSecretApiKey = 'alPastorTacos';

    // do something with superSecretApiKey
};

useApiKey();

console.log(superSecretApiKey);
// ReferenceError: superSecretApiKey is not defined
```

This approach poses a few problems:

1. It pollutes the global namespace
2. It's not clear that this should be an IIFE
3. Because it's not documented as an IIFE, it might and can be called more than once

On a side note, IIFE's can also take arguments.

```javascript
var num = 50;

(function(number) {
    console.log(`${number} tacos`)
})(num);
// 50 tacos
```

<h3>Conclusion</h3>

We covered how IIFE's can be useful for data privacy and for single-use functions that don't require an expression or declaration as to not pollute the global namespace.