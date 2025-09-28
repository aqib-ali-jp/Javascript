// // text
// let str = 'asddsa'
// let str2 = "asdas"

// let userName = "Onais"
// let subject = "Web Development ${username}"

// console.log("This is the person " + userName + " doing his homework " + subject)
// // template literals 
// let backTickStr = `This is the person ${userName} doing his homework ${subject}`
// console.log(backTickStTr)


// lowercase
let str = "Osama Younus"
str = str.toLowerCase()
// const lowerCase = str.toLowerCase() 
console.log(str)


// uppercase 
let upperCase = "Aqib Brohi"
upperCase = upperCase.toUpperCase()
console.log(upperCase)

// trim

let address = "         Kumbaarwara      Lyari         aqib asd jk           "
console.log(address.trim())


// concat

let str1 = "Onais"
let str2 = " Karim"
console.log(str2.concat(str1))
// console.log(str1 + str2)


// slice string.slice(start,end)


let sliceMe = "Hello World"
console.log(sliceMe.slice(0,8))


// replace

let str3 = "hellooooo"
// console.log(str3.replace("lo","p"))
console.log(str3.replaceAll("o","p"))


// charAt

let findLetter = "Lion"
console.log(findLetter.charAt(0))
console.log(findLetter[3])

// indexOf

let findIndex = "Nawalane Cheel"
console.log(findIndex.indexOf("Cheel"))


// @username8

let userName = prompt("Enter a username")
// console.log(`@${userName}${userName.length}`)
console.log("@"+userName+userName.length)