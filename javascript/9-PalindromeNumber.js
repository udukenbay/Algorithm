// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
/**
 * @param {number} x
 * @return {boolean}
 */
/////////**Solution 1 */
 var isPalindrome = function(x) {
    let tmp = x;
    let reversedNum = 0;

    if(x>0) {
        while(tmp > 0) {
            //console.log(tmp%10);//lastDigit=tmp%10
            reversedNum = Math.floor(reversedNum*10 + tmp%10);
            tmp = Math.floor(tmp/10);
        }
    
        return x == reversedNum;
    } else return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
// //Follow up: Could you solve it without converting the integer to a string? ////////*****number manipulation */

/////////**Solution 2 */
var isPalindrome_2 = function(x) {
    let reversedNum = 0;
    //if x is negative, it is not palindrome
    //if x % 10 = 0, in order for it to be a palindrome the first digit should also be 0
    if(x < 0 || (x % 10 == 0 && x!=0))
        return false;
    
    while(x > reversedNum) {
        reversedNum = reversedNum*10 + x%10;
        x=x/10;
    }

    return x == reversedNum || x == reversedNum/10;
};

console.log(isPalindrome_2(121));
console.log(isPalindrome_2(-121));
console.log(isPalindrome_2(10));