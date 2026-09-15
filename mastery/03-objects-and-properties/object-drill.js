/*
Objects and Properties — Production Drill

RULES
1. Read clarifying-explainer.md once, then close it.
2. Do not use Google, AI, transcript, slides, or solutions during the cold attempt.
3. For every PREDICT item, write your prediction BEFORE running the file.
4. Replace TODOs with working JavaScript. Do not delete the prompts.
5. Commit the completed file. Your commit is the evidence artifact.
*/

// ============================================================
// GAME 1 — Property lookup: 5/5 before execution
// ============================================================

const learner = {
  name: "Jamal",
  city: "Chicago",
  level: 3
};

// P1 — prediction: // Jamal
// reason: The dot accesses the user's name
console.log(learner.name);

// P2 — prediction: Chicago
// reason: Accessing using the bracket
console.log(learner["city"]);

const lookupKey = "level";
// P3 — prediction: Throws error
// reason: The object isn't referenced
console.log(learner[lookupKey]);

// P4 — prediction: undefined 
// reason: It's not a property
console.log(learner.language);

learner.language = "Spanish";
// P5 — prediction: Spanish
// reason: A new object property was created 
console.log(learner.language);

// After you have written all five predictions, run the file.
// Score BEFORE execution: __ / 5
// Actual results that differed from prediction:


// ============================================================
// GAME 2 — Produce, don't recognize
// ============================================================

const engineer = {
  name: "Amina",
  stack: "JavaScript"
};

// TODO 1: Add a property named `city` with the value "Lagos"
// using dot notation.
engineer.city = "Lagos";
console.log(engineer.city);

// TODO 2: Add a property named `yearsExperience` with the value 4
// using bracket notation.
engineer["yearsExperience"] = 4;
console.log(engineer.yearsExperience);

// TODO 3: Change stack from "JavaScript" to "JavaScript + Java".
engineer.stack = "JavaScript + Java";
console.log(engineer.stack);


// TODO 4: Create a variable named `dynamicKey` containing the string
// "remote". Use that variable with bracket notation to add
// remote: true to engineer. Do NOT write engineer.remote for this TODO.
let dynamicKey = `remote`;
engineer[dynamicKey] = true;

// TODO 5: Delete the `yearsExperience` property.

engineer.yearsExperience = null;
console.log(engineer);


// ============================================================
// GAME 3 — Prototype lookup
// ============================================================

const teamMember = {
  describeTeam() {
    return "platform";
  }
};

const developer = Object.create(teamMember);
developer.name = "Nia";

// P6 — BEFORE execution, predict both results and explain where
// JavaScript finds each property.
// developer.name prediction: Nia
// where found: ??
// developer.describeTeam() prediction: platform
// where found:

console.log(developer.name);
console.log(developer.describeTeam());

// TODO 6: Add an OWN property `describeTeam` to developer that returns
// "frontend". Then predict what developer.describeTeam() will return
// and explain why before running it.

// prediction: Don't know how
// reason:



console.log(developer.describeTeam());


// ============================================================
// GAME 4 — Debugging mutation
// ============================================================

const settings = {
  timezone: "America/Chicago",
  notifications: true
};

const requestedSetting = "timezone";

// The developer wanted to use requestedSetting to dynamically choose
// which property to read, but this line is wrong for that requirement:
const brokenResult = settings.requestedSetting;

// BEFORE fixing it:
// What does brokenResult currently evaluate to?
// Why?

// TODO 7: Replace the broken lookup with the correct dynamic lookup.
const fixedResult = undefined; // replace this expression
console.log(fixedResult);


// ============================================================
// CLOSEOUT — no references
// ============================================================

/*
Answer in your own words:

A. What question is JavaScript answering when it evaluates obj.key?

B. What usually happens when a requested property cannot be found on
   the object or anywhere in its prototype chain?

C. In one or two sentences, distinguish a prototype from a class.

D. When do you need bracket notation rather than ordinary dot notation?

E. Which part of this drill was least automatic?
*/
