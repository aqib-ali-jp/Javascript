
//  to execute piece of code repeatedly is call for loop

// for(Initialization, condition/stopping Condition, updation){
//     //code
// }

// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')


// for (let count = 1; count <=100; count++) {
//     console.log('Count down',count)
// }

// for (let kl = 1; kl <= 5; kl++) {
//     console.log(`Count: ${kl}`);
// }

// sum of numbers
// let sum = 0
// for (let i = 0; i<=10; i++){
//     sum += i // sum = sum + i
// }
// console.log(`Sum: ${sum}`); // Output: Sum: 55

// 
// for (let i = 1; i<=5; i++){
//     for(let j= 1; j<=5; j++){
//          console.log(`i: ${i}, j: ${j}`);
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= 5; j++) {
//         row += (i * j) + '\t'; // row = row + (i * j) + '\t';
//         // console.log((i * j) + '\t')
//     }
//     console.log(row);
// }

// break

// for (i = 1; i<=10; i++){
//     if(i === 4){
//         break;
//     }
//     console.log(`Countdown: ${i}`)
// }

// console.log(i)


// for(i=1; i>=1; i++){
//     console.log('inifinite loop=',i)
// }


// for loop,   while loop, do while loop

// while(condition){
//     // block of code
// }


// let i = 1;

// while(i <= 10){
//     console.log('Web Development',i)
//     i++;
// }

// do {

// }
// while(condition)

// let i = 1;
// do {
//     console.log('Javascript',i)
//     i++
// }
// while(i<=5);


// for of loop

// for(var of stringvariable){
//     block of code
// }

// let fruits = ['Mango','Banana','Apple']
// console.log(fruits[1])
// let addressName = '2387462378236782'
// for(let i of addressName){
//     console.log(i)
// }



// print odd number 1 to 100

// for(let i = 0; i<=100; i++){
//     // console.log('Numbers=',i)
//     if(i%2 !== 0){
//         console.log('Odd Numbers=',i)
//     }
// }



//write any number from 1 - 10 guess the number from user and print if he's correct or not

// let num = prompt('Guess a Number');
// num = Number(num);

// let correctNumber = 6

// for(let i = 0; i<=10; i++){
//     if(num === correctNumber){
//         console.log('You guess the correct Number',correctNumber)
//         break;
//     }
//     else{
//         console.log('try again')
//     }
// }



let correctNum = 5; // random number 1-10
let guess;

for (let i = 0; i < 5; i++) {
    guess = Number(prompt('Guess a Number (1-10):'));
    
    if (guess === correctNum) {
        console.log(`🎉 You guessed it right! The number was ${correctNum}`);
        break; // exit loop if correct
    } else {
        console.log('❌ Wrong guess, try again');
    }
}

if (guess !== correctNum) {
    console.log(`Game Over! The correct number was ${correctNum}`);
}



