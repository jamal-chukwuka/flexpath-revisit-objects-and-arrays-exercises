# Targeted Repair Resources — Objects Behind the Scenes

> **CURRENT ROUTE — after cold attempt 1**
>
> Do **not** read this whole resource list. Your cold attempt isolated a specific gap cluster. Complete the highlighted route below, close the resources, then do a fresh cold attempt without editing the original answers.

## 🔴 Read now — required

### 1. MDN Learn — Object prototypes
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes

**Read only through the prototype-chain/property-lookup explanation and the `Object.getPrototypeOf()` example.**

Your target question:

> When JavaScript evaluates `object.property`, where does it look first, where does it look next, and when does the search stop?

You should be able to draw this from memory afterward:

`object → prototype → prototype's prototype → ... → null`

### 2. MDN — Inheritance and the prototype chain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain

**Read these parts only:**

- `Inheritance with the prototype chain` → `Inheriting properties`
- the explanation distinguishing an object's `[[Prototype]]` from a constructor function's `.prototype`
- the constructor example showing that an instance's `[[Prototype]]` points at `Constructor.prototype`

Your target questions:

- What is an **own property**?
- What is an **inherited property**?
- Why does lookup continue when a property is not owned by the starting object?
- Why is `Person.prototype` different from the own properties on `ada`?
- Why is `Object.getPrototypeOf(ada) === Person.prototype` true after `new Person(...)`?

### 3. MDN — Object.hasOwn()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn

Read the **Description** and first examples only.

Your target distinction:

- `Object.hasOwn(obj, "x")` asks: **does this object itself own `x`?**
- `"x" in obj` asks: **is `x` available anywhere on the object or its prototype chain?**

You must be able to explain why these two expressions can legitimately return different answers.

## 🟡 Tutorial fallback — only if the MDN route still feels abstract

### javascript.info — Prototypal inheritance
https://javascript.info/prototype-inheritance

Use only the opening prototype/lookup examples. Stop once you can trace a property lookup without assistance.

## 🎥 Video fallback — only if the diagrams/text still do not click

Search YouTube for **`JavaScript prototype chain explained Object.create`** and choose one concise explainer that visibly diagrams the chain. Do not watch a playlist or a general JavaScript objects course.

While watching, pause before each lookup example and predict where JavaScript will find the property. Passive watching does not count as repair.

## 🔴 Your diagnosed repair targets from cold attempt 1

Your first attempt showed enough understanding to avoid replaying the LaunchCode section, but these concepts need repair:

1. **Own vs inherited properties** — you correctly identified `bike.name` and `bike.wheels` as belonging to `bike`, but were unsure how ownership relates to `Object.hasOwn()`.
2. **`Object.hasOwn()` vs normal lookup / `in`** — this distinction was not yet available cold.
3. **Exact lookup chain** — you recognized that `child.level` comes from `grandparent`, but the search does not simply "stop at grandparent"; an unresolved lookup continues until `null`.
4. **`[[Prototype]]` vs `.prototype`** — this is currently a major gap. Constructor instances need to become concrete rather than terminology.
5. **Inherited method + `this`** — you have the beginning of the call-site idea, but need to explain why an inherited method called as `checking.label()` receives `checking` as `this`.
6. **Transfer/build** — your first build merged the behavior object and member instance. After repair you need to construct the relationship from scratch.

## Do NOT correct the original cold attempt

Keep `mastery-drill.js` exactly as historical evidence of what you could produce before repair.

After the required reading:

1. Close MDN/javascript.info/YouTube.
2. Do **not** look at an answer key.
3. Create a new cold response file for round 2.
4. Predict before executing code.
5. Preserve wrong answers rather than overwriting them after execution.
6. Push the round-2 evidence.

Then the round-2 evidence determines whether this concept block advances, gets one more tiny repair, or enters spaced retrieval.
