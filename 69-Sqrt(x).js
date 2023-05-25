/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let closeSqrt = 0;
    if(x === 0) {
        return 0
    }
    if(x <= 3) {
        return 1
    }

    for(let i = 2; i <= x; i++) {
        if(i * i > x) {
            return i - 1;
        }
    }
};
