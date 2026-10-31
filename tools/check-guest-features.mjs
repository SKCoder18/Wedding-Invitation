import ts from 'typescript';
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
function load(path,requireFn){const exports={};vm.runInNewContext(ts.transpileModule(fs.readFileSync(path,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,{exports,require:requireFn,TextEncoder,URL,URLSearchParams,location:{search:'?guest=Sai+%26+Family'}});return exports}
const wedding=load('src/wedding.ts');const util=load('src/guest-utils.ts',()=>wedding);
for(const [kind,start,end] of [['reception','20261115T140000Z','20261115T160000Z'],['ceremony','20261115T230000Z','20261116T003000Z']]){const ics=util.calendarText(kind);assert(ics.includes('DTSTART:'+start));assert(ics.includes('DTEND:'+end));assert(ics.replace(/\r\n /g,'').includes('https://maps.app.goo.gl/igzEGsajhBAZbN5c9'));assert(ics.split('\r\n').every(line=>Buffer.byteLength(line)<=75));assert(ics.includes('M. Gnanasekhar'));}
assert.equal(util.guestName(),'Sai & Family');for(const name of ['Sai & Family','పవిత్ర కుటుంబం','<script>alert(1)</script>'])assert.equal(new URL(util.guestLink('https://example.com/?old=1#x',name,'te')).searchParams.get('guest'),name);
console.log('PASS: both calendar times, venue, ICS folding and personalized Unicode links');


assert.equal(new URL(util.guestLink("https://example.com/?side=groom", "Guest", "te")).searchParams.get("side"), "groom");
assert.equal(new URL(util.guestLink("https://example.com/?side=unknown", "Guest")).searchParams.get("side"), "bride");
console.log("PASS: sharing preserves groom side and defaults invalid sides to bride");
