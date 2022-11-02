/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let str = s.split(" ");
  str = str.filter(item => {return item.length != 0});

  let a = str[str.length-1];
  return a.length;
};