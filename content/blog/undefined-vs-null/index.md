---
title: undefined vs null
date: "2020-01-13"
description: The subtle differences between the two
---

By now, you've undoubtedly run across both <code>undefined</code> and <code>null</code> and wondered what the differences between them are.

One typically refers to the lack of a declaration while the other refers to an intentional absence of a value.

<h3>undefined</h3>

Undefined typically refers to the lack of a value assignment.

```javascript
let word;
word === undefined; // true
typeof word // "undefined"
word === null; // false

let word2 = undefined; // This also works, but you shouldn't do it
```

While you can explicitly assign a value of <code>undefined</code> to a variable, typically a variable that is undefined is one that hasn't yet been initialized with a value.

<h3>null</h3>

On the other hand, null refers to an intentional assignment of a non-existent value.

```javascript
let word = null;
word === null; // true
word === false; // false
typeof word // "object"
```

A variable with a value of null has intentionally been declared with a value of null.

<h3>Conclusion</h3>

It's perfectly okay to declare variables without assigning a variable if you expect it to be assigned at a later time (i.e. declaring a variable and assigning a value later through if/else blocks). However, it may be easier to catch bugs with an explicit assignment of null so that's typically the approach I take.