/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = []

    for(let i = 0; i < nums.length; i++) {
        // check if result is in array, if not put nums[i] into array
        if(!arr.includes(target - nums[i])) {
            arr.push(nums[i])
        } else {
            const ind = arr.indexOf(target - nums[i])
            return [i, ind]
        }
    }
};
