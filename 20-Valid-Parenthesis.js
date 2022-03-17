/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    // check if length of array is even number 
    if (s.length == 0 || s.length % 2 != 0) {
        return false;
    }

    const closingParentheses = Object.freeze({
        "(": ")",
        "{": "}",
        "[": "]"
    });

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        // if opening char we add to stack
        if (s[i] in closingParentheses) {
            stack.push(s[i]);
            // if closing char we equal it with last stack element, remove it from there.
        } else if (s[i] != closingParentheses[stack.pop()]) {
            return false;
        }
    }
    // So our stack should empty if array is valid
    return stack.length == 0;
};

s = '[[][][])'

if (isValid(s)) console.log('valid');
else console.log('invalid');