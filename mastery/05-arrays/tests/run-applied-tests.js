import assert from "node:assert/strict";
import firstOpenTicketForOwner from "../exercises/07-applied-find.js";
import affordableInStock from "../exercises/08-applied-filter.js";
import employeeLabels from "../exercises/09-applied-map.js";
import sendNotifications from "../exercises/10-applied-foreach.js";
import reversedTaskView from "../exercises/11-applied-copy.js";

const exercises=[
["07 — applied lookup",()=>{const a=[{id:1,ownerId:7,resolved:true},{id:2,ownerId:7,resolved:false},{id:3,ownerId:7,resolved:false}];assert.equal(firstOpenTicketForOwner(a,7),a[1]);assert.equal(firstOpenTicketForOwner(a,99),undefined);} ],
["08 — applied selection",()=>{const a=[{id:1,price:20,inStock:true},{id:2,price:10,inStock:false},{id:3,price:15,inStock:true},{id:4,price:30,inStock:true}];const before=JSON.stringify(a);assert.deepEqual(affordableInStock(a,20),[a[0],a[2]]);assert.equal(JSON.stringify(a),before);} ],
["09 — applied transformation",()=>{const a=[{id:4,name:"Mina",department:"Ops"},{id:9,name:"Theo",department:"Data"}];const before=JSON.stringify(a);assert.deepEqual(employeeLabels(a),[{id:4,label:"Mina — Ops"},{id:9,label:"Theo — Data"}]);assert.equal(JSON.stringify(a),before);} ],
["10 — applied side effects",()=>{const a=[{id:1,message:"A"},{id:2,message:"B"}],seen=[];const result=sendNotifications(a,(...x)=>seen.push(x));assert.deepEqual(seen,[[1,"A"],[2,"B"]]);assert.equal(result,undefined);} ],
["11 — applied shallow copy",()=>{const a=[{id:1},{id:2},{id:3}];const before=[...a];const result=reversedTaskView(a);assert.deepEqual(result,[a[2],a[1],a[0]]);assert.deepEqual(a,before);assert.notEqual(result,a);assert.equal(result[0],a[2]);} ]
];
let passed=0;for(const [name,run] of exercises){try{run();passed++;console.log("PASS  "+name);}catch(e){console.log("FAIL  "+name);console.log("      Contract not satisfied: "+e.message.split("\n")[0]);}}
console.log("\n"+passed+"/"+exercises.length+" applied exercise groups passed.");if(passed!==exercises.length)process.exitCode=1;
