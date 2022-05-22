/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
// https://leetcode.com/contest/weekly-contest-294/problems/percentage-of-letter-in-string/
// Accepted => good job!!!
 var percentageLetter = function(s, letter) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i) == letter) {
            counter++;
        };
    }

    let ans = Math.floor(counter / s.length * 100);
    return ans;
};

console.log(percentageLetter("foobar", "o"));
console.log(percentageLetter("sgawtb", "s"));