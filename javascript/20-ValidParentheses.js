// 20-ValidParentheses.js
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let pnt_1 = ['(', '[', '{'];
    let pnt_2 = [')', ']', '}'];

    let str = s.split("");
    let stack = [];

    let index = 0;
    // console.log(str);
    
    for(let i=0; i < str.length; i++) {
        //open parentheses
        if(pnt_1.filter(el => el == str[i]) == str[i]) {
            stack.push(str[i]);
            // console.log("stack open:", stack);
        }
        //closing parentheses
        else if(pnt_2.filter(el => el == str[i]) == str[i]){
            // console.log(str[i]);

            index = pnt_2.indexOf(str[i]);
            // console.log("index:", pnt_1[index]);

            if(stack.includes(pnt_1[index])) {
                stack.splice(stack.indexOf(pnt_1[index]), 1);
                // console.log("stack close", stack);
            }
        }
    }

    if(stack.length > 0) {
        return false;
    } else return true;
};

console.log(isValid("()"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("(]"));//false
console.log(isValid("(){}}{"));//false
console.log(isValid("({{{{}}}))"));//false
console.log(isValid("{[]}"));//true

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.