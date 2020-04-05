---
title: Understanding bind(), call(), and apply()
date: "2020-03-02"
description: Some useful methods to add to your toolkit
---

As a quick refresher, <code>this</code> in JavaScript refers to the object that is executing the function being called. Let's take a look how to use bind, call, and apply.

<h3>bind()</h3>

bind() creates a new function that has "this" set to the context of the provided value.

```javascript
function greet() {
    console.log(`Hello my name is ${this.name}`);
}

const person = { name: 'Richie' };
const boundGreet = greet.bind(person);
boundGreet(); // Hello my name is Richie
```

In this example, the function greet() is bound to the object "person" and is able to reference it to properly console.log what "this.name" is.

bind() also accepts arguments.

```javascript
function greet(language) {
    console.log(`Hello my name is ${this.name} and I speak ${language}`);
}

const person = { name: 'Richie' };
const boundGreet = greet.bind(person, 'English');
boundGreet(); // Hello my name is Richie and I speak English
```

<h3>call()</h3>

call() is similar to bind() except that it does not create a new function. Instead, it sets "this" to the context of the provided value and immediately executes the function.

```javascript
function greet() {
    console.log(`Hello my name is ${this.name}`);
}

const person = { name: 'Richie' };
greet.call(person); // Hello my name is Richie
```

In this example, we don't create a function expression and can instead immediately call the function.

call() also accepts arguments.

```javascript
function greet(age) {
    console.log(`Hello my name is ${this.name} and I am ${age}`);
}

const person = { name: 'Richie' };
greet.call(person, 24); // Hello my name is Richie and I am 24
```

<h3>apply()</h3>

apply() is similar to call() except that it takes an array of arguments instead of comma-separated values.

Note: You aren't required to pass in arguments just like in the other methods.

```javascript
function greet(favoriteFood, favoriteDogBreed) {
    console.log(`Hello my name is ${this.name}. I love ${favoriteFood} and ${favoriteDogBreed}.`);
}

const person = { name: 'Richie' };
greet.apply(person, ['tacos', 'frenchies']);
// Hello my name is Richie. I love tacos and frenchies.
```

<h3>Conclusion</h3>

We learned some awesome ways to get reference to "this" when you create a function and object that aren't directly tied to each other. 

All the methods above bind to the context of the value being passed in, but <code>bind()</code> returns a new function while <code>call()</code> and <code>apply()</code> can immediately be called. The difference being that call() takes arguments separately while apply() takes them as an array.

Hopefully you can add this to your toolkit and utilize them soon!