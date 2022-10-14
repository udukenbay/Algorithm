/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
  let person = new Map(); // each person (up to N) is a key in a map
  for(let i=1; i <= n; i++) {
    person.set(i, 0);
  }
  console.log(person);

  for (let i=0; i < trust.length; i++) {
    person.delete(trust[i][0]); // if the person trusts someone, delete the person from map
  }

  console.log(person);
  if(person.size == 0) {
    return -1;
  } else {
    let judge = person.keys().next().value; // get the only key remaining in the map
    let count = 0; // used to count how many times the judge was trusted
    for (let i=0; i < trust.length; i++) {
      if(trust[i][1] === judge) { // if judge is found in the array, increment the map value
        count++;
      }
    }
    if(count == (n-1)) {
      return judge; // # of needed trusts for the judge must be N-1 (judge can't trust judge)
    } else {
      return -1;
    }
  }
};

console.log(findJudge(2, [[1,2]]));
console.log(findJudge(3, [[1,3],[2,3]]));
console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
console.log(findJudge(3, [[1,2],[2,3]]));