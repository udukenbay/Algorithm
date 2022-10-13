/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {

  if(magazine.length < ransomNote.length)
    return false;

  let b = {};

  for (let i = 0; i < magazine.length; i++) {
    if(checkKey(b, magazine[i])) {
      b[magazine[i]]++;
    } else b[magazine[i]] = 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if(magazine.indexOf(ransomNote[i]) == -1)
      return false;

    b[ransomNote[i]]--;
  }

  for (const [key, value] of Object.entries(b)) {
    if(value < 0)
      return false;
  }

  return true;
};

console.log(canConstruct("a","b"));
console.log(canConstruct("aa","ab"));
console.log(canConstruct("aa","aab"));
console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));

function checkKey(objectName, keyName) {
  let keyExist = Object.keys(objectName).some(key => key === keyName);
  return keyExist;
};