---
title: JavaScript 3 Dots
date: "2020-03-04"
description: Rest parameters and spread syntax
---

If you've ever seen <code>...</code> in JavaScript, these are features that were introduced in ES6 called rest parameters and the spread syntax operator.

<h3>Rest Parameters</h3>

A function can be called with any number of arguments as seen here.

```javascript
function sum(a, b) {
    return a + b;
}

sum(1, 2, 3, 4, 5); // 3
```

No error is thrown for passing in excessive arguments, but what if you want to use the excess?

Rest parameters allow you to access the <b>rest of the parameters</b> by gathering them into an array.

```javascript
function sum(...rest) {
    console.log(rest);

    let sum = 0;

    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }

    return sum;
}

sum(1, 2, 3, 4, 5);

// [1, 2, 3, 4, 5]
// 15
```

No other parameters were defined in the function above so all arguments passed in were gathered into the <code>rest</code> array.

```javascript
function description(firstName, lastName, ...rest) {
    const fruits = rest.join(', ');
    console.log(`${firstName} ${lastName} likes ${fruits}.`);
}

description('richie', 'yi', 'apples', 'bananas', 'strawberries');
// "richie yi likes apples, bananas, strawberries."
```

Above, two parameters were defined so those we can access as variables and the rest are gathered into an array.

Also, one thing to note is that <code>...rest</code> must always the last parameter - otherwise it will throw an error.

<h3>Spread Syntax</h3>

Rest parameters are a great way to access parameters, but what about arguments that you pass in?

The spread syntax looks similar to rest parameters, but allows you to expand elements of an iterable (i.e. arrays) where multiple arguments can fit.

```javascript
function sumOfThree(first, second, third) {
    console.log(first);
    console.log(second);
    console.log(third);
    return first + second + third;
}

sumOfThree(...[5, 6, 7]);
// 5
// 6
// 7
// 18
```

The array gets <i>spread</i> and expands, allowing us to access each element of the array respective to its index and parameter order.

The spread syntax also allows for some interesting ways to merge arrays.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log([...arr1, 20, 25, ...arr2]);
// [1, 2, 3, 20, 25, 4, 5, 6]
```

You can also merge objects.

```javascript
const richie = { name: 'richie', age: 25 };
const newAge = { age: 28 };

const newRichie = { ...richie, ...newAge };

console.log(newRichie);
// { name: 'richie', age: 28 }
```
Do note that the latter object will overwrite any properties you also have in the first one.

<h3>Conclusion</h3>

Rest parameters and the spread syntax operator offer great ways to improve the developer experience using JavaScript. Things to remember:

Three dots in a parameter means you're using <b>rest parameters</b> and can access the argument as an array.

Three dots as an argument in a function call means you're using the <b>spread syntax</b> and are spreading out the arguments to be used in the function.