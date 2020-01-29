---
title: Hoisting in JavaScript
date: "2020-01-28"
---

To understand hoisting, I believe that it's imperative to understand what scope is first.

<h3>What is scope?</h3>

<i>Scope</i> defines where variables and functions are accessible inside your program.
Here's a simple function:

```javascript
function add5(num) {
    return num + 5;
}

add5(7) // 12
```

The function add5() is availble on the global scope because it is not nested
within another expression.

Let's add onto the function above.

```javascript
function add5(num) {
    function get2() {
        return 2;
    }

    return get2() + num + 5;
}

add5(10) // 17
```

Here the function get2() is only available within the function add5()
and is local scoped. It is <i>locally</i> scoped because get2() is avaiable
only within the scope of add5().
