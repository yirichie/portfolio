---
title: Babel v7.8.0 and ES2020 Features
date: "2020-01-12"
description: Nullish coalesing, optional chaining, and dynamic imports
---

January 11 marked the official release of Babel v7.8.0, which now supports ES2020 features by default. You no longer need individual plugins for nullish coalesing, optional chaining, and dynamic imports. If you haven't been using them already, let's go over them now.

<h3>Nullish Coalescing</h3>

As we all know, JavaScript has many quirks, and one of them is how falsy values work. If you aren't already aware, an empty string (''), the value zero (0), and false are all falsy values - as are undefined and null.

```javascript
!!""; // false
!!0; // false
!!false; // false
!!undefined; // false
!!null; // false
```

Due to this, it's quite possible to run into bugs when using the pipe operator (||).

```javascript
const emptyString = "";
const word1 = emptyString || "hello world";
word1; // 'hello world'

const zero = 0;
const word2 = zero || "hello world";
word2; // 'hello world'

const falseVal = false;
const word3 = falseVal || "hello world";
word3; // 'hello world'
```

The nullish coalescing operator (??) solves this issue by returning the right-hand operand only for nullish left-hand operand values like null or undefined.

```javascript
const nullish1 = null;
const word1 = nullish1 ?? "hello world";
word1; // 'hello world'

const nullish2 = undefined;
const word1 = nullish2 ?? "hello world";
word2; // 'hello world'

const falseyVal = 0;
const word1 = 0 ?? "hello world";
word2; // 0
```

<h3>Optional Chaining</h3>

If you've ever worked with deep data structures such as data that comes back from an API, then optional chaining will be a lifesaver. You'll no longer need to check for intermediate nodes and your app (hopefully) won't crash when you forgot to check for one of them.

```javascript
// Sample API response
const res = {
  data: {
    user: {
      street: "123 Fake Street",
    },
  },
};

// The old ugly way
const street = res && res.data && res.data.user && res.data.user.street;

// The new cool way
const street = res?.data?.user?.street;
```

If either res or data or user is nullish, the expression short-circuits and returns undefined. You could even combine it with the nullish coalescing operator to give it a default value if it does short-circuit (although the pipe operator still works here too).

```javascript
const res = null;
const street = res?.data?.user?.street ?? "789 Real Street";
street;
// '789 Real Street';
```

<h3>Dynamic Imports</h3>

Import and export statements are static - the syntax is strict and only allows a string as the module path. It also doesn't allow conditional imports.

Dynamic imports load the module and return a Promise, which allows you to be a little more flexible with its usage. For example, if you wanted to lazy load languages for i18n when a user clicks on the language in a dropdown.

```javascript
const handleLanguageChange = async (language) => {
  // Load language json file and await Promise to complete
  const json = await import(`locales/${language}.json`);

  i18n
    .addResourceBundle
    // ...i18n stuff here
    ();
};
```

<h3>Conclusion</h3>

ES2020 released some awesome JavaScript features that you might not have needed, but will be a great addition to your toolkit when you do come across lines of code where you can utilize them.
