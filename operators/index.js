// assignment  operator '='

// const category = 'action'

// // for addition
// const a = 5;
// const b = 7;

// const c = a + b;
// console.log("The value of C is:", c)



// const num1 = 5;
// const num2 = 6;

// const sum = num1 + num2;
// console.log(sum);

// // for substraction

// const num1 = 5;
// const num2 = 7;

// const result = num1 - num2;
// console.log("The Result is:", result)

// // for multiplication

// const d = 5;
// const e = 7;

// const h = d * e;
// console.log("The Result of h is:", h)

// exponent **

// const exp = 7 ** 3
// console.log(exp)

// division /

// const div = 10 / 2
// console.log(div)

// reminder(modulus) % 

// const mod = 13 % 5
// console.log(mod)

// increment ++
// let x = 5;
// const y = ++x;
// console.log(y)




// let x = 10
// x= x+5;  // 10 + 5 = 15
// x+=5    // x = x+ 5
// console.log(x)

// concatination
// const k = 6
// const z = '6'
// console.log(k + z) // -5


// comparision operator
// comparision always return a boolean(true / false)
// ==
// let w1 = 5;
// let w2 = 5;
// console.log(w1 == w2)

// let w1 = 5;
// let w2 = '5';
// console.log(w1 == w2)

// ===
// let w1 = 5;
// let w2 = '5';
// console.log(w1 === w2)

//  != (not equal to)
// let n1= 5;
// let n2= 6;
// console.log(n1 != n2)

// greater than >
// let n1= 5;
// let n2= 5;
// console.log(n1 > n2)

// greater than and equal to
// let n1= 4;
// let n2= 5;
// console.log(n1 >= n2)


// let b1 = 'hi' //empty string , 0 , false this means falsy values
// console.log( b1 ? 'hello' : 'by')


// let age = 18
// let p1 = age >= 18 ? "Eligigble for driving license" : "not eligible"
// console.log(p1)

// let x = 5
// let y = ++x
// console.log(x)
// console.log(y)

// let veg = ''
// if (veg) {
//     console.log("Vegs are available in store")
// } else {
//     console.log("Vegs are not available in store")
// }

// Data types

// JavaScript has 8 Datatypes
// String let str = 'string'
// Number let num = 10
// Bigint let bgint = bigint("12123127361278617836127878")
// Boolean let bool = false
// Undefined let undef = undefine
// Null let nullish = null
// Symbol let user = symbol() used for uniqueness
// Object let obj = {}

// let str = 'string'
// console.log(typeof str)
// let num = 10
// console.log(typeof num)
// let bgint = BigInt("12123127361278617836127878")
// console.log(typeof bgint)
// let bool = true
// console.log(typeof bool)
// let undef = undefined
// console.log(typeof undef)
// let nullish = null
// console.log(typeof nullish)

// let aksdh = 'gjhg'
// let alpha = aksdh
// console.log(alpha)
// console.log(typeof alpha)

// name rules
// let l2ol2 = 'error'
// console.log(l2ol2)

// ge;


// const sum1 = 2
// const sum2 = 5
let undf;
console.log(undf)
const str = 'hfg' // falsey value
console.log(str)
const zro = 0 // false value
console.log(zro)
const flsey = false // falsey value
// const nul = null // false value
// const undef = undefined // falsey value
if(undf){
    console.log(true)
}
else{
    console.log(false)
}
// // console.log(sum1 || zro ? 'i am truthy' : 'falsey');

// // logical !

// console.log(!str || !sum1 ? 'truthy' : 'fasley')

// if (!str || !sum1) {
//     console.log(true)
// }
// else {
//     console.log(false)
// let function = 'jjsj';
// console.log(function)

// JS Case Sensitive
// let yousuf = 'A good person'
// console.log(yousuF)

// let userName;
// let userIma
// }
// console.log(4 > 5 || 10 === 10) // 1:false 2:true




// if(name || address){
//     console.log('Correct Information')
// }
// else {
//     console.log('False Information')
// }

let userName = ''
let address = 'jhg'
let age = 18
let licence = true

if((age || licence) || (userName && address)){
    console.log('Eligible for license')
}
else {
    console.log('Not Eligible')
}
