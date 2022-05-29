/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
// https://leetcode.com/contest/weekly-contest-295/problems/rearrange-characters-to-make-target-string/
// https://leetcode.com/contest/weekly-contest-295/
 var rearrangeCharacters = function(s, target) {
    let stack = [];
    let counter = 0;

    s = s.split('');
    target = target.split('');

    // console.log(s);
    // console.log(target);

    let i = 0;
    while(i < s.length) {

        for(let j = 0; j < target.length; j++) {
            if(s[i] == target[j] && !stack.find((k) => i == k)) {
                // if(s[i] == target[j] && !stack.find((k) => i == k)) {
                // console.log(target[j] + ' - ' +j);
                stack.push(i);
                s.splice(i, 1);
                if(j == target.length-1) {
                    counter++;
                }
            }
        }

        i++;
    }

    return counter;
};

console.log(rearrangeCharacters('ilovecodingonleetcode', 'code'));
console.log(rearrangeCharacters('abcba', 'abc'));
console.log(rearrangeCharacters('abbaccaddaeea', 'aaaaa'));
