# Objects Behind the Scenes — Mastery Gate

**Learning status:** section completed 2026-09-17.  
**Mastery status:** not yet established; requires cold production evidence.

This folder is the post-instruction mastery gate for the LaunchCode **Objects Behind the Scenes** concept block.

## What should be demonstrable cold

- Explain the difference between an object's own properties and properties available through its prototype chain.
- Predict JavaScript's property lookup order when a property is missing on the object itself.
- Inspect an object's prototype with `Object.getPrototypeOf()`.
- Distinguish an object's internal `[[Prototype]]` relationship from a constructor function's `.prototype` property.
- Explain property shadowing/overriding in a prototype chain.
- Determine whether a property is owned by the object with `Object.hasOwn()`.
- Predict what happens when an inherited method executes and uses `this`.
- Trace a prototype chain until `null`.

## Mastery sequence

1. Do `mastery-drill.js` **without notes, videos, or documentation**.
2. Record uncertainty rather than searching mid-drill.
3. Run the file and compare predictions with executable behavior.
4. Classify misses: terminology, lookup-chain model, own-vs-inherited discrimination, `this`, or prototype inspection.
5. Only then use `resources.md` for targeted repair.
6. Re-attempt missed concepts later without copying the original solution.

## Exit evidence

This block is ready to move from active instruction to retrieval when you can independently predict and explain prototype lookup behavior, distinguish own/inherited properties, and solve the transfer item without documentation.

Course completion is not being treated as mastery; delayed retrieval will still be required.
