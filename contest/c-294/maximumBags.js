/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
// https://leetcode.com/contest/weekly-contest-294/problems/maximum-bags-with-full-capacity-of-rocks/
 var maximumBags = function(capacity, rocks, additionalRocks) {

    let n = 0;
    let rock = additionalRocks;
    
    for(let i = 0; i < additionalRocks; i++) {

        let j = 0;
        while(j < rocks.length) {

            if(rocks[j] < capacity[j]) {
                rocks[j] = rocks[j] + 1;
                rock--;
                n++;
                break;
            }
            j++;
        }


        // console.log(capacity.every(
        //     (element, index) => element === rocks[index]
        // ));

        // if(!checkCapacity(capacity, rocks)) break;
    }

    console.log(checkCapacity(capacity, rocks));
    console.log(capacity);
    console.log(rocks);
    console.log(additionalRocks);

    return n;
};

console.log(maximumBags([2,3,4,5], [1,2,4,4], 2));
console.log(maximumBags([10,2,2], [2,2,0], 100));


// compare 
function checkCapacity(a1, a2) {

    let isFit = false;

    if(a1.every((el, index) => a2[index] === el)) {
        isFit = true;
    } else {
        for(let i = 0; i < a2.length; i++) {
            if((a2[i] === a1[i] && i < a2.length-1) || (a2[i] <= a1[i] && i == a2.length -1)) {
                isFit = true;
            }
        }
    }

    return a2.every((el, index) => a1[index] >= el)
    // return a1.every((el, index) => a2[index] === el);
}