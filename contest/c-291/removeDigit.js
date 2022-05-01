/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 * 
 * 2 <= number.length <= 100
number consists of digits from '1' to '9'.
digit is a digit from '1' to '9'.
digit occurs at least once in number.
 */
 var removeDigit = function(number, digit) {
     let stack = [];
     let indexStack = [];

    // number = parseInt(number);
    digit = parseInt(digit);
  
    //search for indexes
    let arr = Array.from(String(number), Number);

    arr.forEach((item, index) => {
        if(item == digit) indexStack.push(index);
    });


    indexStack.forEach((item, index) => {
        stack.push(parseInt(number.slice(0,item)+number.slice(item+1, number.length)));
    });

    let result = stack.reduce((a,b) => {
        return Math.max(a, b);
    }, -Infinity);
    // console.log(Math.max(stack));

    return result.toString();

    // let stack = "";

    // number = parseInt(number);
    // digit = parseInt(digit);

    // let myFunc = num => Number(num);
  
    // var arr = Array.from(String(number), myFunc);

    // let indxO;
    // if(arr.includes(digit)) {
    //     indxO = arr.indexOf(digit);
    // }

    // for(let i=0; i<arr.length; i++) {
    //     if(indxO == i) {
    //         continue;
    //     } else stack += arr[i];
    // }

    // return stack;
};

// console.log(removeDigit("123", "3"));
console.log(removeDigit("133235", "3"));
console.log(removeDigit("2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471", "3"));