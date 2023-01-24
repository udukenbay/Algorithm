/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let targetIndex = alphabet.indexOf(target);

  let min;
  console.log(targetIndex)

  for(let i=0; i < letters.length; i++) {
    console.log(alphabet.indexOf(letters[i]))
    if(targetIndex < alphabet.indexOf(letters[i])) {
        min = i;
        break;
    }
  }

  if(min == undefined) return letters[0];
  return letters[min];
};

console.log(nextGreatestLetter(["c","f","j"], "a"))
console.log(nextGreatestLetter(["c","f","j"], "c"))
