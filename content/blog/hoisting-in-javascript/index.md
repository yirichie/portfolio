---
title: Hoisting in JavaScript
date: "2020-01-28"
description: Up, up, and away!
---

To understand hoisting, I believe that it's important to understand what scope is first.

<h3>What is scope?</h3>

<i>Scope</i> defines where variables and functions are accessible inside your program.
Here's a simple function:

```javascript
function add5(num) {
    return num + 5
}

add5(7) // 12
```

The function add5() is available on the global scope because it is not nested
within another expression.

Let's add onto the function above.

```javascript
function add5(num) {
    function get2() {
        return 2
    }

    return get2() + num + 5
}

add5(10) // 17
```

Here the function get2() is only available within the function add5()
and is local scoped. It is <i>locally</i> scoped because get2() is available
only locally within the scope of add5().

<h3>What is hoisting?</h3>

Before continuing, what do you predict this will output?

```javascript
console.log(word)

var word = "hello"
```

During the creation phase, the JavaScript interpreter will assign variable
declarations a value of <i>undefined</i>. In a sense, declarations are
<i>hoisted</i> to the top of the relative scope.

Feel free to try it out in the console yourself.

Why undefined? It logs undefined because <code class="language-text">var word</code> was initialized with a value of <i>undefined</i>.

Think of it like this:

```javascript
var word
console.log(word)
word = "hello"
```

Your code doesn't actually move, but <code class="language-text">var word</code> is initialized with an undefined
value so console.log(word) does not throw a ReferenceError. Instead, it logs
<i>undefined</i> and then is assigned a value on line 3.

Declarations are hoisted in JavaScript, so you are able to access the var without an error.

<h3>What about let and const?</h3>

```javascript
console.log(word)
let word = "hello"
// ReferenceError: Cannot access 'word' before initialization
```

While declarations are hoisted, let and const aren't initialized with undefined, so you
can't access them before their declaration.

<h3>Conclusion</h3>

Hoisting can affect your app in a number of ways, so it's important to know what is going
on under the hood to understand how bugs can be introduced. With the introduction of
const and let in ES6, I'd highly recommend sticking to those declarations to avoid
any unintended side-effects of hoisting.
