# Mochi Staging — Objects and Properties

These cards are intentionally selective. They target concepts exposed as weak by the cold diagnostic rather than summarizing the entire section.

## Card 1

When JavaScript evaluates `user.location`, what source is it asking for `location`?
---
It performs property lookup on the `user` object. If `location` is not an own property, lookup may continue through the prototype chain. The expression does not automatically query the browser, GPS, IP address, or operating system.

## Card 2

What does JavaScript normally return when a requested property cannot be found on an object or anywhere in its prototype chain?
---
`undefined`

## Card 3

What is the key difference between `obj.key` and `obj[key]` when `key` is a variable containing `"timezone"`?
---
`obj.key` looks for the literal property named `key`. `obj[key]` evaluates the variable and therefore looks for the property named `timezone`.

## Card 4

What is a useful first mental model for a JavaScript object's prototype?
---
A prototype is another object to which property lookup can delegate. If a property is not found directly on an object, JavaScript can continue looking along its prototype chain.

## Card 5

Why should a JavaScript prototype not simply be defined as "the class of an object"?
---
JavaScript's underlying object model is prototype-based: objects can inherit/delegate property lookup through other objects. `class` is a language abstraction built on that prototype machinery, not a synonym for an object's prototype.

## Sync status

STAGED ONLY — do not treat these cards as present in Mochi until the authenticated Mochi integration confirms a successful write.
