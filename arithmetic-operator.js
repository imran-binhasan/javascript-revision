/*

+  addition
-  substraction
/  division
*  multiplication
** exponential
%  modulus
-- decrement
++ increment
+= plus equals
=- minus equals
*= asterik quals
/= divide equals

*/

// type coertion (implicitly converts type automatically, usually converts string to number for arithmetic operators)
const x = 6
const y = "7"
console.log(x+y) // result = 67 

const a = 5
const b = true
console.log(a+b) //result = 6

const p = false
const q = 'hi'
console.log(p+q) //result = falsehi

const e = 12
const f = "2"
console.log(e*f) //result = 24


const i = "40"
const j = 5
console.log(i/j) //result = 8

const m = "true"
const n = 3
console.log(m-n) //result = NaN

// manual converstion

parseInt() //only integers convertion
parseFloat() 
Number() 

String()
.toString()