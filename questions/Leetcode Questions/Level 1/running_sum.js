//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = nums[0]
    let result = [sum]
    for (let i=1; i<nums.length; i++){
      sum += nums[i]
      result.push(sum)
    } 
    return result
    
    
};

console.log(runningSum([1,2,3,4]))