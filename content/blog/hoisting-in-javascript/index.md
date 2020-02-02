---
title: Hoisting in JavaScript
date: "2019-09-02"
description: Up, up, and away!
---

If you don't quite yet understand scope, be sure to check out <a href="/blog/scope-in-javascript">this</a> blog post first.

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
