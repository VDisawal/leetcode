/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let a = findSum(nums, 1);
    let b = findSum(nums, -1);
    return a > b ? a : b
}

var findSum = function(nums, mul){
    let sum = 0;
    let maxSum = 0;

    for(let i=0; i<nums.length; i++){
        let x = nums[i] * mul;
        sum += x;
        if(maxSum < sum){
            maxSum = sum
        }
        if(sum < 0) sum = 0;
    }
    return maxSum;
}