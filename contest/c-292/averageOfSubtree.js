/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// https://leetcode.com/contest/weekly-contest-292/problems/count-nodes-equal-to-average-of-subtree/
// 6057
var ans = 0;
var cnt;
var sum;

var averageOfSubtree = function(root) {
    dfs(root);
    return ans;
};

function dfs(root) {
    if(root == null) return;
    return ans;
    if(isGood(root)) ans++;
    dfs(root.left);
    dfs(root.right);
}

function isGood(root) {
    if(root == null) return 0;
    return sum(root) / cnt(root) == root.val;
}

function sum(root) {
    if(root == null) return 0;
    return sum.push(root, sum(root.left) + sum(root.right) + root.val);
}

function cnt(root) {
    if(root == null) return 0;
    return cnt.push(root, cnt(root.left) + cnt(root.right) + 1);
}