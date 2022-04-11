// 1046-LastStoneWeight.js
/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    
    let x = 0;
    let y = 0;
    
    while(stones.length > 1) {
        stones.sort(function(a, b) {
          return a - b;
        });
        
        x = stones.slice(-1);
        stones.pop();
        
        y = stones.slice(-1);
        stones.pop();
        
        if(x != y) {
            stones.push(x-y);
        }
    }
    
    return stones[0];
};

console.log(lastStoneWeight([2,7,4,1,8,1]));
console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([8,10,4]));

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the smallest possible weight of the left stone. If there are no stones left, return 0.