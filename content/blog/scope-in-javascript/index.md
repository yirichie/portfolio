---
title: Scope in JavaScript
date: "2019-08-20"
description: Showdown between global vs local scope
---

<h3>What is scope?</h3>

<i>Scope</i> defines where variables and functions are accessible inside your program.
Here's a simple function:

```javascript
function add5(num) {
    return num + 5
}

add5(7) // 12
```

The function add5() is available on the <b>global scope</b> because it is not nested
within another expression.

Let's add onto the function above.

```javascript
function add5(num) {
    function get2() {
        return 2
    }

    return get2() + num + 5
}

add5(10) // 17
```

Here the function get2() is only available within the function add5()
and is local scoped. It is <b>locally scoped</b> because get2() is available
only locally within the scope of add5().
