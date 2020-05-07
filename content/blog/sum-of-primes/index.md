---
title: Sum of Primes
date: '2020-03-27'
description: Finding the sum of primes using JavaScript
---

<h3>What is a prime number?</h3>

A <i>prime number</i> is a "number greater than one that cannot be formed by multiplying two smaller numbers."
For example, 7 is a prime number because the only way to write it as a product is, 1 x 7 or 7 x 1.

<h3>How to approach this</h3>

So I began with explaining what a prime number is not only for those who needed a refresher,
but mainly because you can break down the problem even before you begin.

Let's start by creating a function that checks if a number is prime.

```javascript
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// isPrime(4) => false
// 4 is divisible by 2

// isPrime(5) => true
// 5 is not divisible by anything other than 1 and itself
```

It's important to remember the definition of a prime number - we only want to know if a number is divisible by 1 and itself.
If it's divisible by anything else, it's not a prime number so we start with <code>let i = 2</code>.
If it succesfully loops through everything without returning false, then we return true.

Now let's check for the sum of primes.

```javascript
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function sumOfPrimes(num) {
  const nums = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) nums.push(i);
  }

  return nums.reduce((accum, curr) => accum + curr);
}

//  sumOfPrimes(5) => 2 + 3 + 5 => 10;
//  sumOfPrimes(6) => 2 + 3 + 5 => 10;
//  sumOfPrimes(7) => 2 + 3 + 5 + 7=> 17;
```

Since we defined a function to check if a number is prime or not,
we can call that function within the for loop and pass in that number to our nums array, and then call the reduce method on nums to find the sum.

<h3>Conclusion</h3>

It's important to note that this was probably much easier to solve by figuring out a function to check for a prime number first.
When I initially tackled this problem, I dove head first into creating a sumOfPrimes function and got lost in the weeds with a nested for loop.

Although it's certainly possible to solve head-on, it's much easier to see what's going on when we've separated out the functions and even makes testing more straightforward.
