import assert from "node:assert/strict";
import firstUrgentOpenTicket from "../exercises/01-first-match.js";
import taskValidation from "../exercises/02-validation.js";
import completedBillableTotal from "../exercises/03-reduce-summary.js";
import firstReadingAbove from "../exercises/04-index-search.js";
import activeUsernamesByRole from "../exercises/05-map-filter.js";
import firstValidReadingAbove from "../exercises/06-controlled-loop.js";

const tests = [
  ["01 — first matching element", () => {
    const tickets=[{id:1,priority:"urgent",status:"closed"},{id:2,priority:"normal",status:"open"},{id:3,priority:"urgent",status:"open"},{id:4,priority:"urgent",status:"open"}];
    const before=JSON.stringify(tickets);
    assert.equal(firstUrgentOpenTicket(tickets), tickets[2]);
    assert.equal(firstUrgentOpenTicket([{id:1,priority:"normal",status:"open"}]), undefined);
    assert.equal(JSON.stringify(tickets), before);
  }],
  ["02 — some/every semantics", () => {
    const tasks=[{status:"ready",assignee:"A"},{status:"blocked",assignee:"B"}];
    assert.deepEqual(taskValidation(tasks),{hasBlocked:true,allAssigned:true});
    assert.deepEqual(taskValidation([{status:"ready",assignee:""}]),{hasBlocked:false,allAssigned:false});
    assert.deepEqual(taskValidation([]),{hasBlocked:false,allAssigned:true});
  }],
  ["03 — reduction + empty input", () => {
    const records=[{hours:2,rate:50,completed:true},{hours:8,rate:10,completed:false},{hours:1.5,rate:40,completed:true}];
    const before=JSON.stringify(records);
    assert.equal(completedBillableTotal(records),160);
    assert.equal(completedBillableTotal([]),0);
    assert.equal(JSON.stringify(records),before);
  }],
  ["04 — index search", () => {
    const a=[10,20,35,40];
    assert.equal(firstReadingAbove(a,20),2);
    assert.equal(firstReadingAbove(a,100),-1);
    assert.equal(firstReadingAbove([],1),-1);
  }],
  ["05 — select then transform", () => {
    const users=[{username:"ana",role:"dev",active:true},{username:"bo",role:"dev",active:false},{username:"cy",role:"design",active:true},{username:"dee",role:"dev",active:true}];
    const before=JSON.stringify(users);
    assert.deepEqual(activeUsernamesByRole(users,"dev"),["ana","dee"]);
    assert.deepEqual(activeUsernamesByRole(users,"ops"),[]);
    assert.equal(JSON.stringify(users),before);
  }],
  ["06 — controlled iteration", () => {
    const a=[null,"bad",3,8,100];
    assert.equal(firstValidReadingAbove(a,5),8);
    assert.equal(firstValidReadingAbove([null,"bad",3],5),undefined);
    assert.equal(firstValidReadingAbove([],5),undefined);
  }]
];

let passed=0;
for (const [name,run] of tests) {
  try { run(); passed++; console.log("PASS  "+name); }
  catch (error) { console.log("FAIL  "+name); console.log("      Contract not satisfied: "+error.message.split("\n")[0]); }
}
console.log("\n"+passed+"/"+tests.length+" mastery groups passed.");
if (passed !== tests.length) process.exitCode=1;
