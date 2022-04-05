// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
     const str = 'A!@#b$%^c&*(';
    let text = s.toLowerCase().replace(' ', '').replace(/[^a-z0-9]/gi, '');

    let middle = Math.round(text.length/2);
    let front = 0;
    let back = text.length - 1;

    while(front < middle) {
        if(text.substring(front, front+1) != text.substring(back, back+1))
            return false;
        
        front++;
        back--;
    }
    // console.log(text[middle] + ' - ' + middle);
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("Madam "));
console.log(isPalindrome(" palindrome"));
