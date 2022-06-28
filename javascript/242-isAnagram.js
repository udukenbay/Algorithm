/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// https://leetcode.com/problems/valid-anagram/
//  var isAnagram = function(s, t) {
//     if(s.length != t.length)
//         return false;
    
//     let sHash = {};
//     let tHash = {};

//     for(let i = 0; i < s.length; i++) {
//         if(!sHash[s[i]]) sHash[s[i]] = 1;
//         else sHash[s[i]] += 1;

//         if(!tHash[t[i]]) tHash[t[i]] = 1;
//         else tHash[t[i]] += 1;
//     }

//     for (const [key, value] of Object.entries(sHash)) {
//         if(sHash[key] != tHash[key])
//             return false;
//     }

//     return true;
// };

// 2 - SOLUTION
var isAnagram = function(s, t) {
    s.sort((a, b) => (a.attr > b.attr) - (a.attr < b.attr));
    t.sort((a, b) => (a.attr > b.attr) - (a.attr < b.attr));
    
    console.log(s);
    console.log(t);
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));