/*--------------------------start--------------------------*/

///Capitalize Words In A Sentence
const str = "The quick brown fox jumps over a lazy dog";
///output "The Quick Brown Fox Jumps Over A Lazy Dog"
function getCapitalize(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

console.log(getCapitalize(str));

/*---------------------------end---------------------------*/

// function titleCase(str) {
//   var splitStr = str.toLowerCase().split(' ');
//   for (var i = 0; i < splitStr.length; i++) {
//       // You do not need to check if i is larger than splitStr length, as your for does that for you
//       // Assign it back to the array
//       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   // Directly return the joined string
//   return splitStr.join(' ');
// }

// document.write(titleCase("I'm a little tea pot"));