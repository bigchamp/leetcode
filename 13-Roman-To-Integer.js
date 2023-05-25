/**
 * @param {string} s
 * @return {number}
 */

const romanNumbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function(s) {
    let result = 0;

    for(var i = 0; i < s.length; i++) {
        result += (romanNumbers[s[i+1]] && romanNumbers[s[i]] < romanNumbers[s[i + 1]]) ? -romanNumbers[s[i]] : romanNumbers[s[i]]
    }
    return result
};
