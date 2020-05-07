---
title: Closures in JavaScript
date: '2020-02-11'
description: Controlling side effects and private variables
---

<h3>Closure</h3>

When you create a function within another function, the inner function is the closure. Closures are typically returned so that you can store and access arguments being passed into the outer function sometime in the future.

```javascript
function outer() {
  const name = 'Richie';

  return function inner() {
    console.log(name);
  };
}

outer()(); // Richie
```

Here's a simple example. inner() is the closure and since invoking outer() returns a function, you invoke the returned function to console.log(name).

Closures are typically used to control side effects and to create private variables.

<h4>Controlling Side Effects</h4>

```javascript
function makeTacos(numberOfTacos) {
  setTimeout(() => console.log(`Made ${numberOfTacos} tacos!`), 1000);
}

makeTacos(20); // Made 20 tacos!
```

Here, we have a function makeTacos() that takes an argument of the number of tacos and logs how many tacos it made. The only problem is that it immediately makes the tacos upon being called - what if you wanted to make tacos later?

```javascript
function prepTacos(numOfTacos) {
  return function() {
    setTimeout(() => console.log(`Made ${numOfTacos} tacos!`), 1000);
  };
}

const makeFiftyTacosLater = prepTacos(50);

makeFiftyTacosLater(); // Made 50 tacos!
```

Now we have a function called prepTacos() that also takes a number of tacos, but the difference now is that it returns a closure instead of immediately calling setTimeout. I assigned prepTacos() to the variable `makeFiftyTacosLater' and can now call that function whenever I want.

<h4>Creating Private Variables</h4>

```javascript
function counter() {
  let counter = 0;
  return function() {
    return counter++;
  };
}

const count = counter();
count(); // 0
count(); // 1
count(); // 2
count(); // 3
```

Here, we have a function counter() and a closure that returns the variable counter + 1. It has access to variable 'counter' through <i>lexical scope</i>. We set function counter() to the variable 'count' and call it a couple times - notice that it returns the incremented 'counter' each time. JavaScript doesn't formally have private variables, but in a sense we've created one.

<h3>Conclusion</h3>

Closures allow you to do awesome things like controlling side effects and creating private variables. We saw how you can use closures to delay a side effect until you need it at a later time or use them to create a 'private' variable only accessible by the closure.
