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
//    - name OWN
//    - wheels OWN
//    - powered INHERITED
//    - status INHERITED
//    - battery NOT FOUND

// 2. Predict each result and explain WHY.
// Object.hasOwn(rover, "name") Aster
// Object.hasOwn(rover, "powered") false
// "powered" in rover true
// "battery" in rover undefined

// 3. Explain in your own words:
//    a. What question does Object.hasOwn(object, property) answer?
         // It answers whether the property belongs to an object. 
//    b. What question does property in object answer?
        // It returns the value of the property from an object.
//    c. Why can those two operations return different answers for the same property?
        // One operation is to return the value of a property. The other operation is to determine what object or prototype it belongs to.


// 4. Without running the code, predict:
// rover.powered 
// rover.status()
// true
// ready

// 5. Now execute:
// rover.powered = false;
//
// Answer:
//    a. Is powered now an own property of rover?
// It's an inherited property. 
//    b. What does rover.powered return?
// ready
//    c. Did machine.powered change?
// no
//    d. Explain what happened using the terms own property, prototype, and shadowing.
// 

// 6. Delete rover.powered.
// powered is remove from the rover object 
// Predict BEFORE running:
//    a. What does rover.powered return now?
// undefined
//    b. Does Object.hasOwn(rover, "powered") return true or false?
// false
//    c. Does "powered" in rover return true or false?
// false
//    d. Explain why.
// It was deleted

// 7. Transfer explanation:
// In 2–4 sentences, explain how JavaScript searches for a property when you access
// rover.someProperty. Your explanation must distinguish the object itself from its
// prototype chain.
// First it checks the object for the property, if it can't find the property on the object, it check's the objects prototype,
// if it's not there, it checks, the prototype's prototype and it goes up the chain until it reaches null.

// STOP.
// Commit your answers without correcting them from documentation.
// The goal is evidence of independent transfer, not a perfect score.
