// "Good Tuple Problem"
// You are given an array of integers a. 
// A tuple (i,j,k) is called good if 0 ≤ i < j < k < a.length, a[i] = a[j], a[j] = a[k], and a[i] = a[k].
// Return the number of good tuples in the array.

// Example
// For a = [1, 2, 3, 1, 2, 3, 1, 2, 3], the output should be goodTuples(a) = 4.
// There are 4 good tuples in the array: (0, 3, 6), (0, 4, 8), (1, 4, 7), and (2, 5, 8).

// Input/Output
// [execution time limit] 4000ms (js)
// [input] array.integer a
// An array of integers.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// 1 ≤ a[i] ≤ 1000.
// [output] integer

// The number of good tuples in the array.


// what we know 
// a is the array that is being passed thro 
// a tuple is formed form the array a, in which we have (i, j, k) as indicies
// 0 ≤ i < j < k < a.length so that means if we have an array 
// a =             [1, 2, 3, 1, 2, 3, 1, 2, 3]
// the indicies are 0, 1, 2, 3, 4, 5, 6, 7, 8, with there being 9 numbers 
// this means that the indicies in the tuple have to be increase BUT the values can be the same 
// the first index 0 has to be less or equal to the second index of 1 
// all indexes have to be less than the array length of 9 

// first we go through each number 

function goodTuples(a){
    let count = 0
    for (let i =0; i< a.length; i++){
        //console.log(a[i]) //[1, 2, 3, 1, 2, 3, 1, 2, 3]
        for (let j = i + 1; j <a.length; j++){
            // console.log("--------")
            // console.log(a[j])
            for (let k = j + 1; k < a.length; k++){
                // console.log(a[k])
                if (a[i] === a[j] && a[j] === a[k]){
                    count++;
                }
            } 
        } 
        
    }  
    return count
}


console.log(goodTuples([1, 2, 3, 1, 2, 3, 1, 2, 3]))