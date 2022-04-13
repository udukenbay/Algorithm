// minimizeResult.js
/**
 * @param {string} expression
 * @return {string}
 */
 var minimizeResult = function(expression) {
    let stack = [];
    
    let front = expression.substring(0, expression.indexOf("+"));
    let back = expression.substring(expression.indexOf("+")+1, expression.length);

    let text = "";
    let expr = "";

    for(let i = 0; i < front.length; i++) {
        for(let j = 0; j < back.length; j++) {
            if(i === 0 && j === 0) {
                text = "(" + front.substring(i, front.length) + "+" + back.substring(j, back.length) + ")";
            } else if(i !== 0 && j === 0) {
                text = front.substring(0, i) + "(" + front.substring(i, front.length) + "+" + back.substring(j, back.length) + ")";
            } else {
                text = front.substring(0, i) + "(" + front.substring(i, front.length) + "+" + back.substring(0, j) + ")" + back.substring(j, back.length);
            }

            //regular expression for *
            expr = text;
            if(expr.match(/[0-9]\([0-9]/))
                expr = expr.slice(0, expr.indexOf("(")) + "*" + expr.slice(expr.indexOf("("));

            if(expr.match(/[0-9]\)[0-9]/))
                expr = expr.slice(0, expr.indexOf(")")+1) + "*" + expr.slice(expr.indexOf(")")+1);

            //save to stack
            stack.push({
                key: eval(expr),
                value: text
            });
        }
    }

    // console.log(    Math.min.apply(Math, stack.map(function(o) { return o.key}))    );
    return stack.filter(el => el.key == Math.min.apply(Math, stack.map(function(o) { return o.key})))[0].value;
};


console.log(minimizeResult("247+38"));
console.log(minimizeResult("12+34"));
console.log(minimizeResult("999+999"));


//https://leetcode.com/contest/weekly-contest-288/problems/minimize-result-by-adding-parentheses-to-expression/
//Accepted



// 2232. Minimize Result by Adding Parentheses to Expression
// You are given a 0-indexed string expression of the form "<num1>+<num2>" where <num1> and <num2> represent positive integers.

// Add a pair of parentheses to expression such that after the addition of parentheses, expression is a valid mathematical expression and evaluates to the smallest possible value. The left parenthesis must be added to the left of '+' and the right parenthesis must be added to the right of '+'.

// Return expression after adding a pair of parentheses such that expression evaluates to the smallest possible value. If there are multiple answers that yield the same result, return any of them.

// The input has been generated such that the original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer.