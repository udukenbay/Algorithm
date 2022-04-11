// 14-LongestCommonPrefix.js
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let size = strs.length;
    let pref = "";

    if(size == 0)
        return "";
    
    if(size == 1)
        return strs[0];
    
    strs.sort();

    let minSize = Math.min(strs[0].length, strs[size-1].length);

    let i = 0;
    while(i < minSize && strs[0][i] == strs[size-1][i]) {
        i++;
        pref = strs[0].substring(0, i);
    }

    return pref;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));
console.log(longestCommonPrefix(["apple", "ape", "april"]));
console.log(longestCommonPrefix(["aaa","aa","aaa"]));