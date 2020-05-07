---
title: FizzBuzz
date: '2020-01-27'
description: '1 2 Fizz 4 Buzz...'
---

<h3>What is FizzBuzz?</h3>

Probably the most common beginner JavaScript algorithm, if you're a junior you'll definitely need to know this one.

<blockquote>
Write a program returns the numbers from <b>1 to n</b>. But for multiples of three return “Fizz” instead of the number and for the multiples of five return “Buzz”. For numbers which are multiples of both three and five return “FizzBuzz”.
</blockquote>

```javascript
const fizzBuzz = (n) => {
  const arr = [];

  if (n <= 0) {
    return arr;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      // if divisible by 3 -> return 'Fizz'
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      // if divisible by 5 -> return 'Buzz'
      arr.push('Buzz');
    } else if (i % 15 === 0) {
      // if divisible by 3 and 5 -> return 'FizzBuzz'
      arr.push('FizzBuzz');
    } else {
      // otherwise, return the number
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzBuzz(15))
/*
  [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8,
  "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
/*
```

A couple important things to note here - we know the function only wants to "fizzbuzz"
starting from 1 so we set our iterator to start at 1 in our for loop and need to handle
the edge case of n being less than or equal to 0. Also, we check for modulo 15 to return
'FizzBuzz' because a number that is a multiple of both 3 and 5 has to be a multiple of 15.
Alternatively you could explcitly check for both of those modulos, but you'd need to check
the condition <b>before</b> the check for modulo 3 and check for modulo 5. Otherwise,
it would hit a true condition for those before it reached the third check.

<h3>FizzBuzz Class</h3>

Now let's try this with a FizzBuzz class with methods getFizzBuzz and setFizzBuzz.

```javascript
const fizzBuzz = (n) => {
  // ...
};

class FizzBuzz {
  constructor(n) {
    this.max = n;
  }

  getFizzBuzz = () => {
    return fizzBuzz(this.max);
  };

  setFizzBuzz = (n) => {
    this.max = n;
  };
}

const fb = new FizzBuzz(15);
console.log(fb.getFizzBuzz());
/* 
  [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8,
  "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
*/

fb.setFizzBuzz(5);
console.log(fb.getFizzBuzz(5));
// [1, 2, "Fizz", 4, "Buzz"]
```

Above, we've created a FizzBuzz class that takes in <b>n</b> and sets it to the instance's max variable.
We create a new instance of FizzBuzz and set it to variable <b>fb</b>. When we invoke the getFizzBuzz method,
we still get back the same array that we saw earlier - awesome! We called setFizzBuzz method and passed in a new max o 5.
We know that this worked because getFizzBuzz now only went up to 5.

<h3>Conclusion</h3>

You've had your first introduction to JavaScript classes here, which I'll be sure to dive further into in another blog post.
But in short, classes are essentially blueprints that allow you to create "instances" of the class.
We were then able to play around with this instance by invoking methods getFizzBuzz and even setFizzBuzz.
Instances are separate from each other so you can definitely create another FizzBuzz instance to set different maxes without affecting other ones.

Classes in JavaScript open up a whole slew of more programming doors so it's important to keep in mind for the future.
