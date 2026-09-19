/*
  Objects Behind the Scenes — Cold Mastery Drill

  Rules:
  - No notes, docs, AI, or videos during the cold attempt.
  - Write predictions/explanations BEFORE running the file.
  - Do not erase a wrong prediction; preserve it as evidence.
*/

// ============================================================
// 1. OWN VS INHERITED
// ============================================================

const vehicle = {
  moves: true,
  describe() {
    return `${this.name} moves: ${this.moves}`;
  },
};

const bike = Object.create(vehicle);
bike.name = "Commuter bike";
bike.wheels = 2;

// COLD RESPONSE:
// A. Which of these are bike's OWN properties: name, wheels, moves, describe?
// Name and wheels are properties of bike. 
// B. What does Object.hasOwn(bike, "moves") return, and why?
// It returns false because the property belongs to the bike object's prototype. 
// C. What does "moves" in bike return? Why can B and C differ?
// It returns true because it's accessing the prototype chain to find the moves property. 
// Object.hasOWN is asking whether the property belongs to the bike object. It's not looking for the value.



// ============================================================
// 2. PROPERTY LOOKUP + SHADOWING
// ============================================================

const baseSettings = {
  theme: "light",
  language: "en",
};

const userSettings = Object.create(baseSettings);
userSettings.language = "es";

// BEFORE RUNNING, predict and explain each result:
console.log(userSettings.language);
console.log(userSettings.theme);
console.log(Object.hasOwn(userSettings, "language"));
console.log(Object.hasOwn(userSettings, "theme"));

// COLD RESPONSE:
// Explain exactly where JavaScript finds `language` and `theme`.
// Found from userSetting object and the language is es and the theme is light
// be inherited.
// What concept explains why `language` on baseSettings is not returned?
/* The language is spanish now. Theme is light. The bottom two are strings. */

// ============================================================
// 3. TRACE THE CHAIN
// ============================================================

const grandparent = { level: "grandparent" };
const parent = Object.create(grandparent);
const child = Object.create(parent);
child.own = "child";

// COLD RESPONSE:
// Without running code, write the lookup path JavaScript follows for:
//   child.own - looks at child
//   child.level - grandparent
//   child.missing - doesn't exist
// Where does the search stop?
// Grandparent


// ============================================================
// 4. [[Prototype]] VS .prototype
// ============================================================

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};

const ada = new Person("Ada");

// COLD RESPONSE:
// A. Is `Person.prototype` the same concept as ada's own properties?
// No, but I'm not clear why
// B. Predict: Object.getPrototypeOf(ada) === Person.prototype
// No, but Idk why
// C. Is greet an own property of ada?
// Not sure.
// D. Why can ada.greet() still work?
// Yes
console.log(Object.getPrototypeOf(ada) === Person.prototype);
console.log(Object.hasOwn(ada, "greet"));
console.log(ada.greet());


// ============================================================
// 5. INHERITED METHOD + `this`
// ============================================================

const accountBehavior = {
  label() {
    return `${this.owner}: $${this.balance}`;
  },
};

const checking = Object.create(accountBehavior);
checking.owner = "Jamal";
checking.balance = 125;

// COLD RESPONSE:
// What does checking.label() return?
  // Jamal : 125
// When label() runs, what object does `this` refer to?
// the object the method is on
// Why does it NOT refer to accountBehavior?
// Not sure.

console.log(checking.label());


// ============================================================
// 6. DEBUG / DISCRIMINATION
// ============================================================

const permissions = { canRead: true };
const editor = Object.create(permissions);
editor.canWrite = true;

// A teammate says:
// "editor doesn't have canRead because Object.hasOwn(editor, 'canRead') is false."
//
// COLD RESPONSE:
// Explain precisely what is wrong with that statement.
// Write TWO different expressions that answer two different questions:
//   1. Does editor itself own canRead? Not sure
//   2. Is canRead available through normal property lookup? not sure


// ============================================================
// 7. TRANSFER — BUILD FROM MEMORY
// ============================================================

// Without copying earlier code, build this model:
//
// - `userBehavior` has a method `summary()` that returns the current object's
//   username and role.
// - `member` inherits from userBehavior.
// - member has own properties username="nina" and role="member".
// - `admin` inherits from member but shadows role with "admin".
    const userBehavior = {
           username: `nina`,
           role: `member`,
           member : function summary (){
              console.log(username, role);
           }
    }

    const admin = Object.create(userBehavior);
    admin.role = `admin`;
// Then demonstrate, with code and comments:
//   a. member.summary()
//   b. admin.summary()
//   c. which object owns `role` in each case
//   d. the prototype relationship between admin and member
//   e. why the inherited method uses the correct object's role


// ============================================================
// SELF-CHECK AFTER THE COLD ATTEMPT
// ============================================================

// Record:
// - Which item(s) were fully independent?
// - Which item(s) were correct but uncertain/slow?
// - Which item(s) required a lookup or hint?
// - What exact misconception caused each miss?
//
// Do not convert this into a percentage. The evidence is concept-specific.
