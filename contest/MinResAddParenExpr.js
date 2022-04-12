//MinResAddParenExpr.js
/**
 * @param {string} expression
 * @return {string}
 */
 var minimizeResult = function(expression) {
    const result = [];
    
    //loop through the input string
    for(let i = 0; i < expression.length; i++){
        let currentString = expression[i];
        //if we find an operator we will split the input string into two
        //by recursive calling the right and left side
        if(currentString === '+' || currentString === '-' || currentString === '*'){
        let left = minimizeResult(expression.substring(0,i));
        let right = minimizeResult(expression.substring(i+1));
        
        left.forEach(leftElement => {
            right.forEach(rightElement => {
                if(currentString === '+'){
                    result.push(leftElement + rightElement);
                }if(currentString === '-'){
                    result.push(leftElement - rightElement);
                }
                if(currentString === '*'){
                    result.push(leftElement * rightElement);
                }
              });
            });
            
        }  
    }
    
    //if there are no operators
    //convert the input string to an integer and push into the
    //results array
    if(result.length === 0){
        result.push(parseInt(expression));
    }
    return result;
};

console.log(minimizeResult("247+38"));


//https://leetcode.com/contest/weekly-contest-288/problems/minimize-result-by-adding-parentheses-to-expression/