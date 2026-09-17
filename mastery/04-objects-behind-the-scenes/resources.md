# Targeted Repair Resources — Objects Behind the Scenes

Use this file **after the cold mastery drill**, and only for the concept that actually failed.

## Recommended documentation

### MDN — Inheritance and the prototype chain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain

Use for: the prototype-chain mental model, property lookup, shadowing, constructor prototypes, and how inheritance works in JavaScript.

### MDN — Object.getPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

Use for: inspecting the actual `[[Prototype]]` relationship of an object.

### MDN — Object.hasOwn()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn

Use for: discriminating between an object's own property and a property merely available through its prototype chain.

## Clarifying explainer

### javascript.info — Prototypal inheritance
https://javascript.info/prototype-inheritance

Use when MDN is technically clear but you want a more tutorial-like walk through prototype lookup and inherited behavior.

## Explainer videos

Do **not** watch a playlist by default. Search/watch only the segment that repairs the diagnosed gap.

### MDN / conceptual target
For video search, use the exact concept rather than generic “JavaScript objects”:

- `JavaScript prototype chain explained`
- `JavaScript Object.getPrototypeOf prototype`
- `JavaScript own property inherited property`
- `JavaScript prototype chain this inherited method`

Preferred source order when equivalent material exists:
1. LaunchCode/course-provided explanation matching the current section.
2. MDN or another standards-oriented explanation.
3. A concise reputable explainer video.

## Repair routing

- **Own vs inherited confusion:** Object.hasOwn + prototype-chain example.
- **Lookup-order confusion:** draw/trace object → prototype → next prototype → null.
- **`.prototype` vs object `[[Prototype]]` confusion:** constructor example + Object.getPrototypeOf(instance).
- **Inherited method / `this` confusion:** predict `this` at call site, then execute.
- **Terminology-only miss:** brief doc lookup, then immediately re-explain from memory.

After repair, close the resource and solve a new example cold. Resource consumption is not the completion condition; independent production is.
