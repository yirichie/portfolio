---
title: Reverse Linked List
date: "2020-04-08"
description: LeetCode problem
---

<a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank">Link to LeetCode problem</a>

<blockquote>
Reverse a singly linked list.
</blockquote>

```javascript
/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/
```

Straightforward problem, but a bit of a head scratcher when you first try to approach it.

One thing I've found to be really helpful for singly linked lists is to have two or more pointers.
For this problem, we'll keep track of "head", "next", and "previous".

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
    // ...
};
```

To start off, we can see that our only parameter is "head" which is a ListNode that has properties of "val" and "next".
We take in this argument and should return some other ListNode.

```javascript
const reverseList = head => {
    let previous = null
    
    while (head) {
        // ...
    }
    
    return previous;
};
```

We need a reference to the "previous" node to set as the head's next node and we'll start by setting it to a value of null, which ListNodes end with.
We also know we need to iterate over the entire List so we'll continue iterating while "head" exists.

With all of this in mind, try your own solution and scroll down to see if we came up with a similar approach.

```javascript
const reverseList = head => {
    let previous = null;
    
    while (head) {
        const next = head.next
        head.next = previous;
        previous = head
        head = next
    }
    
    return previous;
};
```

Above, we iterate over each ListNode while "head" exists. We always start by setting "next" to "head.next".

Then, set current "head.next" to "previous" to create the reverse link. Set "previous" to the current "head" and then set current "head" to next to continue the iteration.

We eventually hit the end when 5 has a null value of "head.next" and end the while loop, finally returning previous - which is technically now the new "head".

<h3>Conclusion</h3>

Singly Linked List problems can usually be done "in place," but do require the use of several pointers to keep track of nodes.

One thing to note for this problem was the fact that we kept a reference of "next" within the while loop, while "previous" was outside.
By destroying the first link between 1 and 2, we still need a way to continue refrencing the current node and the current node's next node during every iteration.
We keep the reference to "previous" outside because it doesn't directly relate to the current "head," but we still need to maintain that reference separately.