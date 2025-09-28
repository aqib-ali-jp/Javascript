// const obj = {
//     id: 1,
//     name: 'Osama',
//     address: 'Cheelchowk'
// }

// console.log(obj)
// Array: Collections of data or collection of similar data
// linear 

//mutable / changeable 
// let vegitables = ['potato', 'tomato', 'lady finger']
// console.log(vegitables);
// // console.log(vegitables.length)
// vegitables[0] = "chilli"
// console.log(vegitables);
// // immutable / not changeable
// let str = "Aqib Onais"
// str[1] = "d" 
// console.log(str)

// console.log(vegitables[1])
// console.log(vegitables[2])



// let fruits = ["Mango", "Banana", "Apple"]

// // Array Method
// // push()
// // pop()

// console.log(fruits)

// fruits.push("Orange")

// console.log(fruits)

// fruits.pop()

// console.log(fruits)



// let fruits = ["Mango", "Banana", "Apple", "Pine Apple"]
// console.log(fruits)
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }



// for (let i of fruits){
//     console.log(i)
// }

// find average of whole class students


let marks = [78, 50, 65, 90, 40]

let total = 0;
for (let i = 0; i < marks.length; i++){
    total = total + marks[i]
}

console.log('average of sum:',total / marks.length)

// for (let i of marks){
//     console.log(i)
// }