/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  let wealth = [];

  for(let i=0; i<accounts.length; i++) {
      wealth[i] = 0;
      for(let j=0; j<accounts[i].length; j++) {
          wealth[i] += accounts[i][j];
      }
  }

  return Math.max(...wealth)
};

//*** 2 solution */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  let maxWealth = 0;

  for(let i=0; i<accounts.length; i++) {
      let currentWealth = 0;
      for(let j=0; j<accounts[i].length; j++) {
          currentWealth += accounts[i][j];
      }

      maxWealth = Math.max(maxWealth, currentWealth);
  }

  return maxWealth
};