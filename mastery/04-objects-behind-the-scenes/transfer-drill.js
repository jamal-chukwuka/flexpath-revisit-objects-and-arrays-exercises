// Objects Behind the Scenes — Transfer Drill
// Purpose: delayed cold retrieval after the second mastery pass.
// Do not use notes, docs, prior answers, or AI assistance while completing this drill.

const machine = {
  powered: true,
  status() {
    return "ready";
  }
};

const rover = Object.create(machine);
rover.name = "Aster";
rover.wheels = 6;

// 1. Before running the code, classify each property below as:
//    OWN, INHERITED, or NOT FOUND.
//    - name
//    - wheels
//    - powered
//    - status
//    - battery

// 2. Predict each result and explain WHY.
// Object.hasOwn(rover, "name")
// Object.hasOwn(rover, "powered")
// "powered" in rover
// "battery" in rover

// 3. Explain in your own words:
//    a. What question does Object.hasOwn(object, property) answer?
//    b. What question does property in object answer?
//    c. Why can those two operations return different answers for the same property?

// 4. Without running the code, predict:
// rover.powered
// rover.status()

// 5. Now execute:
// rover.powered = false;
//
// Answer:
//    a. Is powered now an own property of rover?
//    b. What does rover.powered return?
//    c. Did machine.powered change?
//    d. Explain what happened using the terms own property, prototype, and shadowing.

// 6. Delete rover.powered.
//
// Predict BEFORE running:
//    a. What does rover.powered return now?
//    b. Does Object.hasOwn(rover, "powered") return true or false?
//    c. Does "powered" in rover return true or false?
//    d. Explain why.

// 7. Transfer explanation:
// In 2–4 sentences, explain how JavaScript searches for a property when you access
// rover.someProperty. Your explanation must distinguish the object itself from its
// prototype chain.

// STOP.
// Commit your answers without correcting them from documentation.
// The goal is evidence of independent transfer, not a perfect score.
