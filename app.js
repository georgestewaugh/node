const path=require('path')      //====>>>>line number 3 to 8used in this path -----------

console.log(__dirname)
console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

//-------------///////--------------//////-----------////////----------/////----

const math=require('./math')     //=====>>>without using destrucrtue method using 
console.log(math.add(3,3))
console.log(math.sub(3,3))
console.log(math.div(3,3))
console.log(math.mul(3,3))

//-------------//////////////-------------

//import os from 'os'

//--------- with uing destructure the same math function--------

const {add,sub,mul,div}=require('./math')   //=====>>>with using destrucrtue method using 
console.log(add(6,3))
console.log(sub(6,3))
console.log(div(6,3))
console.log(mul(6,3)) 

//-------------//////////////-------------

import os from 'os'

import {add,sub,mul,div} from './math.js'  //===>>>with using destrucrtue method using --if i used in this method class name create in .mjs
console.log(add(6,3))
console.log(sub(6,3))
console.log(div(6,3))
console.log(mul(6,3))



