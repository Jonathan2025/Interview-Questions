// // function consoleEven(arr) {
// //     let data = arr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1))
// //     console.log(data) // will return undefined
// // }

// // consoleEven(arr)



// // const numbers = [1, 2, 3, 4, 5]

// // const sum = numbers.reduce(function(accumulator, currentValue){
// //     return accumulator + currentValue
// // }, 0)



// //the reduce method takes 2 arguments --> callback function and an initial value for the "accumulator" which is by default "0" 
// // the callback funciton tkaes 2 arguments --> accumulator for each pass AND the current value processed
// // write a fucntion that takes an array of numbers and returns the product of all the numbers in the array 
// const numbers = [2, 3, 4]
// const product = numbers.reduce(function(accumulator, currentValue){
//     return accumulator * currentValue
// }, 1)
// console.log(product)


// const numbers = [1, 2, 3, 4, 5];
// const evenNumber = numbers.find(function(number) {
//   return number % 2 === 0;
// });
// console.log(evenNumber); // Output: 2





// object2.ages = [30, 32, 40];
// console.log(object2)
// /*
// {
//     "users": [ "Alex", "James","Mohammed"],
//     "professions": {
//         "alex": "software engineer",
//         "james": "lawyer",
//         "mohammed": "technical writer"
//     },
//     "ages": [30,32,40],
// }
// */



// // declare a hashmap using the JS map constructor 
// let firstHashmap = new Map()
// // Declaring and initializing a new hashmap object 
// let secondHashmap = new Map([
//     [1, "first"], 
//     [2, "second"],
//     [5, "fifth"]
// ])
// console.log(firstHashmap) //returns the first hashmap 
// console.log(secondHashmap) // returns the second hashmap
// // get the value of key 2 
// console.log(secondHashmap.get(2)) // returns "second"
// // check to see if key 3 is in the hashmap 
// console.log(secondHashmap.has(2)) // true 
// // add a new key value pair to the hashmap
// secondHashmap.set(3, "third")
// console.log(secondHashmap)



// function solution(inputArray) {
//     // then we will intialize a max product variable 
//     let maxProduct = 0 
    
//     // first want to iterate through the array and get each pair 
//     for (let i =0; i < inputArray.length; i++){
//         const num1 = inputArray[i] 
//         const num2 = inputArray[i+1]
//         console.log(num1, num2)
//         if (maxProduct < num1*num2){
//             maxProduct = (num1*num2)
//         } 
//     } 
//     return maxProduct
// }
// console.log(solution([3, 6, -2, -5, 7, 3]))


function solution(n) {
    const middleNum = 2*(n-1)+1 //5 
    let numsList = []
    // mistake was that we had the i<0 rather than i>0 as this is the run condition
    for (let i=(middleNum-2); i>0; i-=2){
            //console.log(i)
            numsList.push(i)
    } //return numsList // [1,3]


    // then we multiply the sum of the numsList and then add it to the middle num
    let result = numsList.reduce((a, b) => {
        return a + b;
    }, 0);

    return result*2 + middleNum
}

console.log(solution(3))