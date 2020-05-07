---
title: Last Stone Weight
date: '2020-04-12'
description: LeetCode problem
---

<a href="https://leetcode.com/problems/last-stone-weight/" target="_blank">Link to LeetCode problem</a>

<blockquote>
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left. Return the weight of this stone (or 0 if there are no stones left.)

</blockquote>

```javascript
/*
Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
*/
```

This one is very straightforward - we'll want to start off by sorting the list of stones.

```javascript
/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  let sorted = stones.sort((a, b) => b - a);
  // ...
};
```

Sorting in a descending order allows us to target the first and second element since we know they'll always be the greatest.

```javascript
const lastStoneWeight = (stones) => {
  let sorted = stones.sort((a, b) => b - a);

  while (sorted.length > 1) {
    // ...
  }

  return !sorted.length ? 0 : sorted[0];
};
```

We know that ultimately, we want to return 0 if no elements remain in the list or the remaining element if only 1 is remains.
We also know that we want to use a <code>while loop</code> so that we can continue iterating over the array until 0 or 1 remain.

```javascript
const lastStoneWeight = (stones) => {
  let sorted = stones.sort((a, b) => b - a);

  while (sorted.length > 1) {
    const current = sorted[0];
    const next = sorted[1];

    if (next) {
      if (current !== next) {
        sorted.splice(0, 2, current - next);
      } else {
        sorted.splice(0, 2);
      }
      sorted.sort((a, b) => b - a);
    }
  }

  return !sorted.length ? 0 : sorted[0];
};
```

Finally, we see some conditionals.

If "next" exists:

1. If "current" does not equal "next", we remove the first 2 elements and add the difference of "current - next"
2. Otherwise, we remove the first 2 elements since they cancel out.

Then we sort by descending and continue iterating over the elements until 0 or 1 element(s) remain.

<h3>Conclusion</h3>

I don't get to use while loops as often as I'd like, but this is a great example of a use case.
We learned to use a while loop to continue an operation until that condition became true and
also saw a great use case for the ".splice()" Array method.

I've ran into instances in my early days of programming where I attempted to use while loops and became stuck in an infinite loop,
so I'd just be mindful that your condition will actually be true at some point in time.
