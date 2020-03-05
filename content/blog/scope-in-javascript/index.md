---
title: Scope in JavaScript
date: "2019-08-20"
description: Showdown between global vs local scope
---

<h3>What is scope?</h3>

<i>Scope</i> defines where variables and functions are accessible inside your program.

<h3>Global Scope</h3>

If a variable is declared outside of a function or curly braces, it is defined in the <b>global scope</b>.

```javascript
const name = 'Richie';

function greeting() {
    console.log(`Hello my name is ${name}`);
}
greeting(); // Hello my name is Richie
```

In this example, <code>name</code> is defined in the <b>global scope</b> because it is declared outside of a function. "name" is a global variable so you can access it anywhere and as seen in the example, within the function greeting().

Although it's commonly not recommended, if you absolutely must use a global variable then they are typically declared with capital letters like so.

```javascript
const GLOBAL_NAME = 'Richie';
```

<h3>Local Scope</h3>

If a variable is only available within a specific area of your code, then it is defined in a <b>local scope</b>. There are 2 kinds of local scope in JavaScript: function and block scope.

<h4>Function Scope</h4>

When you declare a variable within a function, it is available only within the function.

```javascript
function greeting() {
    const name = 'Richie';
    console.log(name);
}
greeting(); // Richie
console.log(name); // ReferenceError: name is not defined
```

The variable "name" is locally scoped within the function and cannot be accessed outside of it.

<h4>Block Scope</h4>

Block scope refers to variables declared within a block (if/else blocks, switch conditions, and for/while loops). <code>let</code> and <code>const</code> are block scoped while <code>var</code> is function scoped.

```javascript
function fruits() {
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
    }

    console.log(fruit1);
    console.log(fruit2);
}

fruits();
// apple
// ReferenceError: fruit2 is not defined

function veggies() {
    if (true) {
        var veg1 = 'carrot';
        const veg2 = 'tomato';
    }

    console.log(veg1);
    console.log(veg2);
}

veggies();
// carrot
// ReferenceError: veg2 is not defined
```

We can see that 'fruit1' and 'veg1' are available outside of the block (function scoped) while 'fruit2' and 'veg2' are not (block scoped).

<h4>Lexical Scope</h4>

When a function is defined within another function, the inner function's ability to access the variables of the outer function is called <b>lexical scope</b>.

```javascript
function outer() {
    const name = 'Richie';
    function inner() {
        const age = 24;
        console.log(`Hi my name is ${name} and I am ${age}`);
    }
    
    inner();
    console.log(age);
}
outer();
// Hi my name is Richie and I am 24
// ReferenceError: age is not defined
```

We're able to access variable 'name' within inner(), but don't have access to variable 'age' outside of inner().

<h3>Conclusion</h3>

Local variables only exist within the context of a function/block, while global variables are accessible everywhere. It's important to understand scope and it's the implications it can have depending on where you decide to declare variables.