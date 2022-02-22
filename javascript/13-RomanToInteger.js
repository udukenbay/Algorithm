/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

    const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const integers = [1, 5, 10, 50, 100, 500, 1000];

    let output = 0;
    //loop through each character
    for(let i=0; i < s.length; i++) {
        //compare current roman symbol with the next right
        if(i+1 != s.length) {
            if(integers[symbols.findIndex(x => x == s[i])] >= integers[symbols.findIndex(x => x == s[i+1])]) {
                output = output + integers[symbols.findIndex(x => x == s[i])];
            } else {
                output = output - integers[symbols.findIndex(x => x == s[i])];
            }
        } else {
            output = output + integers[symbols.findIndex(x => x == s[i])];
        }
    }

    console.log("result:", output);
};

romanToInt("MCMXCIV");


///////*** */
// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var romanToInt = function(s) {
//     const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
//     const integers = [1, 5, 10, 50, 100, 500, 1000];

//     let output = 0;
//     //loop through each character
//     for(let i=0; i < s.length; i++) {
//         //compare current roman symbol with the next right
//         if(i+1 != s.length) {
//             if(integers[symbols.findIndex(x => x == s[i])] >= integers[symbols.findIndex(x => x == s[i+1])]) {
//                 output = output + integers[symbols.findIndex(x => x == s[i])];
//             } else {
//                 output = output - integers[symbols.findIndex(x => x == s[i])];
//             }
//         } else {
//             output = output + integers[symbols.findIndex(x => x == s[i])];
//         }
//     }

//     return output;
// };