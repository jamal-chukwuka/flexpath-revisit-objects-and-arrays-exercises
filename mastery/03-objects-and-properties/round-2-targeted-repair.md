# Round 2 — Targeted Repair: Object Properties vs Environment APIs

Your cold attempt showed a useful split: the basic object model is partly present, but property lookup is being mixed with capabilities supplied by the browser/device environment. This drill targets only that gap.

Do **not** execute the snippets until you have written every prediction. Do not use references for Part A.

## Part A — Predict From the Object Literal

For each expression, write the exact result and one-sentence reason in `round-2-responses.md`.

```js
const user = {
  name: "Jamal",
  role: "engineer"
};

user.location = "Chicago";
```

Predict:

1. `user.name`
2. `user["role"]`
3. `user.location`
4. `user.language`
5. `user["timezone"]`

Then answer:

6. Does reading `user.location` ask the browser for Jamal's physical location, or read a property on this object? Explain.
7. If a property has never been defined on this object, what do you currently expect JavaScript to return when you read it?

## Part B — Tiny Production Task

Create `object-property-probe.js` containing an object named `developer` with exactly these starting properties:

- `name`
- `city`
- `languages` (an array)

Then, without changing the original object literal:

- add a `role` property;
- print `city` using dot notation;
- print `role` using bracket notation;
- print a property named `timezone` that you have **not** defined;
- before running the file, record your predicted output in `round-2-responses.md`.

Run it only after the prediction is committed or written down.

## Part C — Prototype Model Repair

Your first answer treated a prototype as roughly similar to a class. That is not a safe mental model yet.

After Parts A and B, use the course material for a targeted reread of the prototype explanation. Then answer in no more than three sentences:

- Where can JavaScript look when a requested property is not directly on an object?
- Is a prototype itself simply the object's class?
- Why might an object appear to have access to a method that was not written directly inside its object literal?

## Game Within the Game

Win condition: **5/5 property predictions correct before execution.**

Secondary win: explain `user.location` without invoking GPS, IP lookup, browser tracking, or any external service.

The point is not speed. The game measures whether property lookup is becoming automatic.
