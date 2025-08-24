
//  to execute piece of code repeatedly is call for loop

// for(Initialization, condition/stopping Condition, updation){
//     //code
// }

// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')


// for (let count = 1; count <=10; count++) {
//     console.log('Count down')
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

for (i = 1; i<=10; i++){
    if(i === 4){
        break;
    }
    console.log(`Countdown: ${i}`)
}

console.log(i)