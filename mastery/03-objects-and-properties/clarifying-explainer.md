# Objects and Properties — Clarifying Explainer

This repair is based on the gaps exposed by the first cold attempt and the Pluralsight **Objects and Properties** material.

## 1. An object is a container for other data

A JavaScript object groups data under **property keys**.

```js
const user = {
  username: "jamal",
  timezone: "America/Chicago"
};
```

Here `username` and `timezone` are property keys. `"jamal"` and `"America/Chicago"` are their values. A property is the key/value association on the object.

## 2. Property access asks the object — not the browser

This was the important misconception in the first attempt.

```js
user.timezone
```

means: **look on `user` for the property named `timezone`.** It does not ask the browser, GPS, operating system, IP address, or another external source for a timezone.

Likewise:

```js
user.location
```

asks the `user` object for a property named `location`.

Dot notation uses a literal property name:

```js
user.username
```

Bracket notation can also use a string key:

```js
user["username"]
```

and becomes especially useful when the key is stored in a variable:

```js
const key = "timezone";
user[key];
```

## 3. A missing property normally evaluates to `undefined`

```js
const user = { name: "Jamal" };
console.log(user.language);
```

`user` has no own `language` property. JavaScript's property lookup can continue through the object's prototype chain, but if no matching property is found, the expression evaluates to `undefined`.

It does **not** automatically infer a language, query the browser, or return an encoding.

## 4. Properties can be created and changed

```js
user.location = "Chicago";
```

This assignment creates a `location` property if one is not already present. Afterward:

```js
user.location
```

evaluates to `"Chicago"`.

An assignment to an existing property changes its value:

```js
user.location = "Milwaukee";
```

## 5. Prototype is not simply another word for class

The course specifically calls out prototype vs. class as a common point of confusion. JavaScript objects have a **prototype relationship**: an object can delegate property lookup to another object.

A useful first mental model is:

> If JavaScript cannot find a requested property directly on an object, it can look at that object's prototype, then that prototype's prototype, continuing along the prototype chain.

Example:

```js
const engineer = {
  describeRole() {
    return "engineer";
  }
};

const user = Object.create(engineer);
user.name = "Jamal";

user.name;           // own property on user
user.describeRole(); // found through user's prototype
```

`engineer` is an object. `user` was created with `engineer` as its prototype. `describeRole` is therefore available through property lookup even though it is not an own property of `user`.

Classes are a different abstraction. Modern JavaScript `class` syntax ultimately works with JavaScript's prototype-based object model, but for this section do not collapse the two concepts into the same thing.

## Mental model to keep

When you see:

```js
object.someProperty
```

think:

1. I am asking **this object** for the property `someProperty`.
2. If it is not an own property, JavaScript may continue along the prototype chain.
3. If lookup finds nothing, the result is `undefined`.
4. Nothing about that expression automatically queries the outside environment.

Now close this file and do `object-drill.js` without referring back to it.
