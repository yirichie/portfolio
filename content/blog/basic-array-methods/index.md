---
title: Basic Array Methods
date: "2020-01-08"
description: A few simple Array methods you should know
---

<h3>Array.push()</h3>

Adds element(s) to the end of an Array.

```javascript
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
// [1, 2, 3, 4, 5]

const arr2 = [1, 2, 3, 4];
arr2.push(5, 6, 7);
console.log(arr2);
// [1, 2, 3, 4, 5, 6, 7]
```

<h3>Array.unshift()</h3>

Adds element(s) to the front of an Array.

```javascript
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
// [5, 1, 2, 3, 4]

const arr2 = [1, 2, 3, 4];
arr2.push(5, 6, 7);
console.log(arr2);
// [5, 6, 7, 1, 2, 3, 4]
```

<h3>Array.pop()</h3>

Removes element to the end of an Array and does not take parameters.

```javascript
const arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);
// [1, 2, 3]
```

<h3>Array.unshift()</h3>

Removes element to the front of an Array and does not take parameters.

```javascript
const arr = [1, 2, 3, 4];
arr.unshift();
console.log(arr);
// [2, 3, 4]
```

<h3>Array.splice()</h3>

Can remove and add elements from particular index.

First parameter is the index to perform the splice, second is the count to delete (0 if adding), and third is the elements to add (if any).

```javascript
const arr = [1, 2, 3, 4, 5];
// Inserts 6 and index 1
arr.splice(1, 0, 6);
console.log(arr);
// [1, 6, 2, 3, 4, 5]

const arr2 = [1, 2, 3, 4, 5];
// Removes 2 elements starting from index 1
arr2.splice(1, 2);
console.log(arr2);
// [1, 4, 5]

const arr3 = [1, 2, 3, 4, 5];
// Inserts 3 elements starting from index 3
arr3.splice(3, 0, 1, 2, 3);
console.log(arr3);
// [1, 2, 3, 1, 2, 3, 4, 5]
```