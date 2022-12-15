// https://leetcode.com/problems/determine-if-string-halves-are-alike/
/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
  let f1 = s.substring(0, s.length/2);
  let f2 = s.substring(s.length/2, s.length);

  let alike = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let p1 = "";
  let p2 = "";

  for(let i=0; i < f1.length; i++) {
      if(alike.includes(f1.charAt(i))) p1 += f1.charAt(i);
  }

  for(let i=f2.length-1; i >= 0; i--) {
      if(alike.includes(f2.charAt(i))) p2 += f2.charAt(i);
  }

  console.log(f1, p1, 'first part');
  console.log(f2, p2, 'second part');

  if(p1.length == p2.length) return true;

  return false;
};
