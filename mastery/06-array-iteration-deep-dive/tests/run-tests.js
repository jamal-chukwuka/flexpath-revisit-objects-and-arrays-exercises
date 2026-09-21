import assert from "node:assert/strict";
import firstUrgentOpenTicket from "../exercises/01-first-match.js";
import taskValidation from "../exercises/02-validation.js";
import completedBillableTotal from "../exercises/03-reduce-summary.js";
import firstReadingAbove from "../exercises/04-index-search.js";
import activeUsernamesByRole from "../exercises/05-map-filter.js";
import firstValidReadingAbove from "../exercises/06-controlled-loop.js";

const groups = [
  { node:"search:first-match", name:"01 — first matching element", run:() => {
    const tickets=[{id:1,priority:"urgent",status:"closed"},{id:2,priority:"normal",status:"open"},{id:3,priority:"urgent",status:"open"},{id:4,priority:"urgent",status:"open"}];
    const before=JSON.stringify(tickets);
    assert.equal(firstUrgentOpenTicket(tickets), tickets[2]);
    assert.equal(firstUrgentOpenTicket([{id:1,priority:"normal",status:"open"}]), undefined);
    assert.equal(JSON.stringify(tickets), before);
  }},
  { node:"predicate:some-every", name:"02 — some/every semantics", run:() => {
    const tasks=[{status:"ready",assignee:"A"},{status:"blocked",assignee:"B"}];
    assert.deepEqual(taskValidation(tasks),{hasBlocked:true,allAssigned:true});
    assert.deepEqual(taskValidation([{status:"ready",assignee:""}]),{hasBlocked:false,allAssigned:false});
    assert.deepEqual(taskValidation([]),{hasBlocked:false,allAssigned:true});
  }},
  { node:"reduction:accumulator", name:"03 — reduction + empty input", run:() => {
    const records=[{hours:2,rate:50,completed:true},{hours:8,rate:10,completed:false},{hours:1.5,rate:40,completed:true}];
    const before=JSON.stringify(records);
    assert.equal(completedBillableTotal(records),160);
    assert.equal(completedBillableTotal([]),0);
    assert.equal(JSON.stringify(records),before);
  }},
  { node:"search:index", name:"04 — index search", run:() => {
    const a=[10,20,35,40];
    assert.equal(firstReadingAbove(a,20),2);
    assert.equal(firstReadingAbove(a,100),-1);
    assert.equal(firstReadingAbove([],1),-1);
  }},
  { node:"selection-transformation:composition", name:"05 — select then transform", run:() => {
    const users=[{username:"ana",role:"dev",active:true},{username:"bo",role:"dev",active:false},{username:"cy",role:"design",active:true},{username:"dee",role:"dev",active:true}];
    const before=JSON.stringify(users);
    assert.deepEqual(activeUsernamesByRole(users,"dev"),["ana","dee"]);
    assert.deepEqual(activeUsernamesByRole(users,"ops"),[]);
    assert.equal(JSON.stringify(users),before);
  }},
  { node:"iteration:control-flow", name:"06 — controlled iteration", run:() => {
    const a=[null,"bad",3,8,100];
    assert.equal(firstValidReadingAbove(a,5),8);
    assert.equal(firstValidReadingAbove([null,"bad",3],5),undefined);
    assert.equal(firstValidReadingAbove([],5),undefined);
  }}
];

const evidence=[];
for (const group of groups) {
  try {
    group.run();
    evidence.push({node:group.node,status:"PASS"});
    console.log("PASS  "+group.name+"  ["+group.node+"]");
  } catch (error) {
    evidence.push({node:group.node,status:"FAIL"});
    console.log("FAIL  "+group.name+"  ["+group.node+"]");
    console.log("      Contract not satisfied: "+error.message.split("\n")[0]);
  }
}

console.log("\nCold evidence by subskill:");
for (const item of evidence) console.log("  "+item.status.padEnd(4)+"  "+item.node);
console.log("\nDo not repair failures before committing and pushing this cold attempt.");
if (evidence.some(item=>item.status==="FAIL")) process.exitCode=1;
