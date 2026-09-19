import assert from "node:assert/strict";
import appendValue from "../exercises/01-mutation.js";
import findUserById from "../exercises/02-find.js";
import ordersWithStatus from "../exercises/03-filter.js";
import userNames from "../exercises/04-map.js";
import visitEach from "../exercises/05-foreach.js";
import copyRoster from "../exercises/06-shallow-copy.js";

const exercises = [
  ["01 — mutation", "array mutation / identity", () => {
    const input=[1,2]; const output=appendValue(input,3);
    assert.equal(output,input,"return the same array object"); assert.deepEqual(input,[1,2,3],"append to the original array");
  }],
  ["02 — find", "single-match search / callback predicate", () => {
    const users=[{id:1},{id:2},{id:2}];
    assert.equal(findUserById(users,2),users[1],"return the first matching element"); assert.equal(findUserById(users,9),undefined,"return undefined when no element matches");
  }],
  ["03 — filter", "multi-match selection", () => {
    const orders=[{id:1,status:"open"},{id:2,status:"closed"},{id:3,status:"open"}]; const before=JSON.stringify(orders); const result=ordersWithStatus(orders,"open");
    assert.deepEqual(result,[orders[0],orders[2]],"return every matching element"); assert.notEqual(result,orders,"return a new array"); assert.equal(JSON.stringify(orders),before,"leave input unchanged");
  }],
  ["04 — map", "one-to-one transformation", () => {
    const users=[{name:"A"},{name:"B"}]; const before=JSON.stringify(users);
    assert.deepEqual(userNames(users),["A","B"],"produce one transformed value per input element"); assert.equal(JSON.stringify(users),before,"leave input unchanged");
  }],
  ["05 — forEach", "iteration for side effects", () => {
    const seen=[]; const returned=visitEach(["a","b","c"],v=>seen.push(v));
    assert.deepEqual(seen,["a","b","c"],"perform side effect once per element, in order"); assert.equal(returned,undefined,"do not return a transformed collection");
  }],
  ["06 — shallow copy", "outer identity / nested reference sharing", () => {
    const roster=[{name:"A"},{name:"B"}]; const result=copyRoster(roster);
    assert.deepEqual(result,roster,"copy outer array contents"); assert.notEqual(result,roster,"create a different outer array"); assert.equal(result[0],roster[0],"preserve nested references");
  }]
];

let passed=0;
for(const [name,concept,run] of exercises){
  try{run();passed++;console.log("PASS  "+name);}
  catch(error){console.log("FAIL  "+name);console.log("      Contract not satisfied: "+error.message.split("\n")[0]);console.log("      Diagnostic area: "+concept);}
}
console.log("\n"+passed+"/"+exercises.length+" exercise groups passed.");
if(passed!==exercises.length){console.log("Preserve this attempt. Do not look up or repair failures yet; commit and push the evidence.");process.exitCode=1;}
