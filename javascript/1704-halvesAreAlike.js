/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
  let f1 = s.substring(0, s.length/2);
  let f2 = s.substring(s.length/2, s.length);

  let alike = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];



  console.log(f1)
  console.log(f2)
};

// https://leetcode.com/problems/determine-if-string-halves-are-alike/
