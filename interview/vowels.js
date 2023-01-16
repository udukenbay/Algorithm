/*--------------------------start--------------------------*/

///how to print vowels in a string
const str = "The quick brown fox jumps over a lazy dog";
///output "e,u,i,o,a"
// const vowels = (str) => (str.match(/[aeiou]/gi) || []).length;
// let vwl = str.forEach((item) => {
//   if(item.match(/[aeiou]/gi)) return item;
// })

let vowels = [];
let consonants = [];

const allVowels = ['a', 'e', 'i', 'o', 'u'];

[...str].forEach(str => {
  if (allVowels.includes(str)) {
    vowels.push(str);
  } else {
    consonants.push(str);
  }
});

// vowels.concat(consonants).forEach(str => console.log(str));

vowels = [...new Set(vowels)];
// Array.from(new Set(vowels.split(','))).toString()

console.log(vowels);

//justine.jose@dxc.com