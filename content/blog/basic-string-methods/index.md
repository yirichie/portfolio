---
title: Basic String Methods
date: "2020-01-05"
description: A few simple String methods you should know
---

<h3>String.length()</h3>

Returns the length of the string.

```javascript
const str = "hello world";
console.log(str.length());
// 11
```

<h3>String.includes()</h3>

Determines if string contains a substring.

```javascript
const str = "hello world";
console.log(str.includes("hello"));
// true
```

<h3>String.indexOf()</h3>

Returns index of a substring. -1 if substring does not exist in string.

```javascript
const str = "hello world";
console.log(str.indexOf("world"));
// 6

console.log(str.indexOf("test"));
// -1
```

<h3>String.toLowerCase()</h3>

Returns a string with all lowercase letters.

```javascript
const str = "Hello World";
console.log(str.toLowerCase());
// 'hello world'
```

<h3>String.toUpperCase()</h3>

Returns a string with all uppercase letters.

```javascript
const str = "hello world";
console.log(str.toUpperCase());
// 'HELLO WORLD'
```

<h3>String.slice()</h3>

Returns a section of a string.

Takes beginning index as first parameter and optional ending index as second. Will slice to the end of second parameter is not passed in.

```javascript
const str = "hello world";
console.log(str.slice(6));
// 'world'
```

Can be combined with .indexOf() to use as a reference point for beginning index.

```javascript
const str = "al pastor tacos";
console.log(str.slice(str.indexOf("pastor")));
// 'pastor tacos'
```

<h3>String.split()</h3>

Returns an array of strings.

Parameter is a separator which you want to split the string apart on.

```javascript
const str = 'al pastor tacos';
console.log(str.split(' ');
// ['al', 'pastor', 'tacos']
```

<h3>String.charAt()</h3>

Returns the character at a given index.

```javascript
const str = "al pastor tacos";
console.log(str.charAt(4));
// 'a'
```
