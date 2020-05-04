---
title: Middle of the Linked List
date: "2020-04-04"
description: LeetCode problem
---

<a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">Link to LeetCode problem</a>

<blockquote>
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

</blockquote>

```javascript
/*
Input: [1,2,3,4,5] => 3
3 is the middle node

Input: [1,2,3,4,5,6] => 4
4 because if there are 2 middle nodes,
we return the second middle node
*/
```

So with a singly linked list, each node has a reference to the next node, but we must begin at the head.

Thinking about this problem before we begin, we know that the middle of any length is half of the whole length.
And so, we need to keep track of both.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const middleNode = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Input: [1,2,3,4,5] => 3
// Input: [1,2,3,4,5,6] => 4
```

Here we see that fast is going to traverse the nodes twice as quickly as slow. While fast exists and fast.next exists,
we set slow to slow's next node and fast to fast's next next node.

When we hit the case where fast or fast.next doesn't exist, we know we've hit the end and can return slow which is the middle node.
