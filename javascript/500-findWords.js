/** https://leetcode.com/problems/keyboard-row/
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
  let fRow = "qwertyuiop";
  let sRow = "asdfghjkl";
  let tRow = "zxcvbnm";

  let result = [];
  let checkRow = false;
  let whichRow;//определить в каком находится буква
  console.log(words);

  for(let i=0; i < words.length; i++) {
      if(fRow.includes(words[i][0].toLowerCase())) whichRow = 'fRow';
      else if(sRow.includes(words[i][0].toLowerCase())) whichRow = 'sRow';
      else whichRow = 'tRow';
      console.log(whichRow);

      for(let j=0; j < words[i].length; j++) {
          switch(whichRow) {
              case 'fRow':
                  checkRow = !fRow.includes(words[i][j].toLowerCase()) ? false : true;
                  break;
              case 'sRow':
                  checkRow = !sRow.includes(words[i][j].toLowerCase()) ? false : true;
                  break;
              case 'tRow':
                  checkRow = !tRow.includes(words[i][j].toLowerCase()) ? false : true;
                  break;
          }

          if(!checkRow) break;
      }
      console.log(i, words[i], checkRow);

      if(checkRow) {
          result.push(words[i]);
          checkRow = false;
      }
  }

  return result;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));
