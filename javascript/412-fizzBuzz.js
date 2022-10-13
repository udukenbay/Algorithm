/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
  let answer = [];

  for(let i=1; i <= n; i++) {
      let divisible3 = i % 3 ==0;
      let divisible5 = i % 5 == 0;

      if(divisible3 && divisible5) {
          answer.push("FizzBuzz");
      } else if (divisible3) {
          answer.push("Fizz");
      } else if (divisible5) {
          answer.push("Buzz");
      } else {
          answer.push(i+"");
      }
  }

  return answer;
};