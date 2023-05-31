/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        if(!result.includes(nums[i])) {
            result.push(nums[i])
        } else {
            const elIndex = result.indexOf(nums[i])
            result.splice(elIndex, 1)
        }
    }
    return result
};
