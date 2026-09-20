import assert from "node:assert/strict";
import qualifyingCustomer from "../exercises/12-selection.js";
import activeMemberEmails from "../exercises/13-selection.js";
import reportFlaggedOrders from "../exercises/14-selection.js";

const exercises=[
["12 — first qualifying record",()=>{const a=[{id:1,active:false,credits:100},{id:2,active:true,credits:20},{id:3,active:true,credits:80},{id:4,active:true,credits:90}];assert.equal(qualifyingCustomer(a,50),a[2]);assert.equal(qualifyingCustomer(a,200),undefined);} ],
["13 — select and reshape",()=>{const a=[{email:"a@x.test",role:"dev",active:true},{email:"b@x.test",role:"dev",active:false},{email:"c@x.test",role:"design",active:true},{email:"d@x.test",role:"dev",active:true}];const before=JSON.stringify(a);assert.deepEqual(activeMemberEmails(a,"dev"),["a@x.test","d@x.test"]);assert.equal(JSON.stringify(a),before);} ],
["14 — conditional side effects",()=>{const a=[{id:1,flagged:false},{id:2,flagged:true},{id:3,flagged:true}],seen=[];const result=reportFlaggedOrders(a,id=>seen.push(id));assert.deepEqual(seen,[2,3]);assert.equal(result,undefined);} ]
];
let passed=0;for(const [name,run] of exercises){try{run();passed++;console.log("PASS  "+name);}catch(e){console.log("FAIL  "+name);console.log("      Contract not satisfied: "+e.message.split("\n")[0]);}}
console.log("\n"+passed+"/"+exercises.length+" method-selection groups passed.");if(passed!==exercises.length)process.exitCode=1;
