const assert = require("node:assert/strict");

const exercises = [
  ["01 — mutation", "array mutation / identity", () => {
    const fn = require("../exercises/01-mutation"); const input=[1,2]; const output=fn(input,3);
    assert.equal(output,input,"return the same array object"); assert.deepEqual(input,[1,2,3],"append to the original array");
  }],
  ["02 — find", "single-match search / callback predicate", () => {
    const fn=require("../exercises/02-find"); const users=[{id:1},{id:2},{id:2}];
    assert.equal(fn(users,2),users[1],"return the first matching element"); assert.equal(fn(users,9),undefined,"return undefined when no element matches");
  }],
  ["03 — filter", "multi-match selection", () => {
    const fn=require("../exercises/03-filter"); const orders=[{id:1,status:"open"},{id:2,status:"closed"},{id:3,status:"open"}]; const before=JSON.stringify(orders); const result=fn(orders,"open");
    assert.deepEqual(result,[orders[0],orders[2]],"return every matching element"); assert.notEqual(result,orders,"return a new array"); assert.equal(JSON.stringify(orders),before,"leave input unchanged");
  }],
  ["04 — map", "one-to-one transformation", () => {
    const fn=require("../exercises/04-map"); const users=[{name:"A"},{name:"B"}]; const before=JSON.stringify(users);
    assert.deepEqual(fn(users),["A","B"],"produce one transformed value per input element"); assert.equal(JSON.stringify(users),before,"leave input unchanged");
  }],
  ["05 — forEach", "iteration for side effects", () => {
    const fn=require("../exercises/05-foreach"); const seen=[]; const returned=fn(["a","b","c"],v=>seen.push(v));
    assert.deepEqual(seen,["a","b","c"],"perform side effect once per element, in order"); assert.equal(returned,undefined,"do not return a transformed collection");
  }],
  ["06 — shallow copy", "outer identity / nested reference sharing", () => {
    const fn=require("../exercises/06-shallow-copy"); const roster=[{name:"A"},{name:"B"}]; const result=fn(roster);
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
