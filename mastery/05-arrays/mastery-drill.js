// Section 5 — Arrays
// COLD MASTERY DRILL
//
// Rules:
// 1. No course, notes, docs, prior answers, Mochi, search, or AI.
// 2. Write every prediction/explanation BEFORE running any code.
// 3. Do not repair answers after execution. Preserve the cold evidence.
// 4. Complete the entire drill, then commit and push.
// 5. After the push, stop. Diagnosis/remediation comes next.
//
// Goal: test whether you can reason about arrays, mutation, references,
// lookup, iteration, transformation, and selection without support.

// A — ARRAY BASICS + INDEXING
const cities = ["Chicago", "Guadalajara", "Santiago"];
// A1. Predict: cities[0], cities[2], cities[3], cities.length,
// cities[cities.length - 1]
// A2. Explain what an array index represents and why length is 3
// while the final valid index is 2.

// B — MUTATION
const scores = [72, 81, 90];
scores.push(95);
const removed = scores.pop();
scores[0] = 75;
// B1. Predict scores and removed.
// B2. Which operations mutated the original array? Explain.

// C — REFERENCES / SHARED MUTATION
const original = ["a", "b", "c"];
const alias = original;
alias.push("d");
// C1. Predict original, alias, and original === alias.
// C2. Explain WHY changing alias can change what you observe through original.

// D — SHALLOW COPY
const first = [10, 20, 30];
const second = [...first];
second[0] = 99;
// D1. Predict first, second, and first === second.
// D2. Explain the important difference between Sections C and D.

// E — NESTED VALUES + SHALLOW COPY
const roster = [
  { name: "Amina", active: true },
  { name: "Luis", active: false }
];
const rosterCopy = [...roster];
rosterCopy[0].active = false;
// E1. Predict roster[0].active, rosterCopy[0].active,
// roster === rosterCopy, and roster[0] === rosterCopy[0].
// E2. Explain why copying the outer array did or did not isolate
// the nested object.

// F — SEARCHING / FINDING
const users = [
  { id: 1, name: "Maya" },
  { id: 2, name: "Andre" },
  { id: 3, name: "Nia" }
];
const foundUser = users.find(user => user.id === 2);
const missingUser = users.find(user => user.id === 9);
// F1. Predict foundUser and missingUser.
// F2. Explain what Array.find() expects from its callback.
// What causes find() to stop searching?
const brokenFind = users.find(user => {
  user.id === 3;
});
// F3. Predict brokenFind and explain exactly why.

// G — TRANSFORMATION
const prices = [5, 10, 20];
const doubled = prices.map(price => price * 2);
// G1. Predict prices, doubled, and prices === doubled.
// G2. Explain what map() produces relative to the original array.

// H — SELECTION
const temperatures = [58, 71, 84, 66, 90];
const warm = temperatures.filter(temp => temp >= 70);
// H1. Predict warm and temperatures.
// H2. Explain the conceptual difference between find(), filter(), and map().

// I — ITERATION + ACCUMULATION
const values = [2, 4, 6];
let total = 0;
values.forEach(value => {
  total += value;
});
// I1. Predict total.
// I2. Explain why this code uses an external variable.
// What does forEach() itself return?

// J — TRANSFER: CHOOSE THE OPERATION
// For each task, choose the array operation you would reach for FIRST
// and explain why. Do not write code unless needed.
// J1. Get the first order whose id is 42.
// J2. Get every order whose status is "open".
// J3. Produce an array containing only customer names.
// J4. Perform a side effect once for every order.
// J5. Add one item to the end of an existing array.
// J6. Remove and return the final item of an existing array.

// K — BUILD FROM MEMORY
const orders = [
  { id: 101, customer: "Amina", total: 45, paid: true },
  { id: 102, customer: "Luis", total: 80, paid: false },
  { id: 103, customer: "Nia", total: 120, paid: true },
  { id: 104, customer: "Kenji", total: 60, paid: false }
];
// K1. Create a new array containing names of all paid customers.
// K2. Find the order with id 103.
// K3. Create a new array containing orders with total >= 70.
// K4. Create a new array where every order total is increased by 10.
//     Do NOT mutate the original order objects.
// K5. Explain whether K1–K4 mutate orders. Be precise about both
//     the outer array and the objects inside it.

// L — EXPLAIN THE MODEL
// In 4–7 sentences, explain arrays to another programmer.
// Distinguish:
// - an array from the values stored inside it
// - index vs length
// - mutation vs producing a new array
// - two variables referencing the same array vs a shallow copy
// - find vs filter vs map
//
// STOP after completing this section.
// Commit and push the untouched cold attempt.
// Do not consult resources or correct failures yet.
