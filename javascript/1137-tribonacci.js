/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let a = []
  a.length = n + 3

  a[0] = 0
  a[1] = 1
  a[2] = 1

  if(n == 0) return 0
  if(n==1 || n==2) return 1

  for(let i = 3; i <= n; i++) {
      a[i] = a[i-1] + a[i-2] + a[i-3]
  }
  return a[n]
};

console.log(tribonacci(5));
// console.log(tribonacci(35));
