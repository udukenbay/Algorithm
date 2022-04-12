//MaxProdAfterKIncs
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumProduct = function(nums, k) {
     let a = nums;
     let n = nums.length;
    // sort the array in ascending order
    a.sort(function(a,b){return a-b;});
    let pre = new Array(n + 1); // prefix sum array
    let maxx = new Array(n + 1); // maximum value array
   
    // Initializing the prefix array
    // and maximum array
    for (let i = 0; i <= n; ++i)
    {
        pre[i] = 0;
        maxx[i] = 0;
    }
   
    for (let i = 1; i <= n; i++)
    {
   
        // Calculating prefix sum of the array
        pre[i] = pre[i - 1] + a[i - 1];
   
        // Calculating max value upto that position
        // in the array
        maxx[i] = Math.max(maxx[i - 1], a[i - 1]);
    }
   
    // Binary search applied for
    // computation here
    let l = 1, r = n, ans=0;
    while (l < r)
    {
           
        let mid = Math.floor((l + r) / 2);
   
        if (ElementsCalculationFunc(pre, maxx,
                               mid - 1, k, n))
        {
            ans = mid;
            l = mid + 1;
        }
        else
            r = mid - 1;
    }
   
    return ans;
};

// console.log(maximumProduct([0,4], 5));

function ElementsCalculationFunc(pre, maxx, x, k, n)
    {
        for (let i = 0, j = x; j <= n; j++, i++)
        {
       
            // It can be explained with the reasoning
            // that if for some x number of elements
            // we can update the values then the
            // increment to the segment (i to j having
            // length -> x) so that all will be equal is
            // (x*maxx[j]) this is the total sum of
            // segment and (pre[j]-pre[i]) is present sum
            // So difference of them should be less than k
            // if yes, then that segment length(x) can be
            // possible return true
            if (x * maxx[j] - (pre[j] - pre[i]) <= k)
                return true;
        }
        return false;
    }

    // https://leetcode.com/contest/weekly-contest-288/problems/maximum-product-after-k-increments/