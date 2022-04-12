// 20-ValidParentheses.js
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let str = s.split("");
    let stack = [];
    
    for(let i=0; i < str.length; i++) {
        let x = str[i];
        
        if(x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }
        
        if(stack.length == 0)
            return false;
        
        let check;
        switch(x) {
            case ')':
                check = stack.pop();
                if(check == '[' || check == '{')
                    return false;
                break;
            case ']':
                check = stack.pop();
                if(check == '(' || check == '{')
                    return false;
                break;
            case '}':
                check = stack.pop();
                if(check == '(' || check == '[')
                    return false;
                break;
        }
    }
    
    return (stack.length == 0);
};

console.log(isValid("()"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("(]"));//false
console.log(isValid("(){}}{"));//false
console.log(isValid("({{{{}}}))"));//false
console.log(isValid("{[]}"));//true
console.log(isValid("([)]"));//false

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.