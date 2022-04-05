/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//  This method takes O(n) time and O(1) extra space. 
//  1) Get the middle of the linked list. 
//  2) Reverse the second half of the linked list. 
//  3) Check if the first half and second half are identical. 
//  4) Construct the original linked list by reversing the second half again and attaching it back to the first half

var isPalindrome = function(head) {
    let result = true;
    let arr = [];
    
    for(let i=0; i<head.length; i++) {
        arr.push(head[i]);
    }
    let front = 0;
    let back = arr.length - 1;

    while(front < back) {
        if (arr[front] != arr[back]) {
            result = false
        }
        front++;
        back--;
    }
    return result;
};

console.log(isPalindrome([1,2,2,1]));
console.log(isPalindrome([1,2]));
console.log(isPalindrome([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]));
console.log(isPalindrome([1, 2, 3, 4, 5, 3, 2, 1]));
//Follow up: Could you do it in O(n) time and O(1) space?

//A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index.
//Each element (commonly called nodes) contains two items: the data stored and a link to the next node.
//LinkedList is the dynamic data structure


//Leetcode Accepted
// var isPalindrome = function(head) {
//     let arr = [];
    
//     let current = head;
//     while(current) {
//         arr.push(current.val);
//         current = current.next;
//     }
    
//     let front = 0;
//     let back = arr.length - 1;

//     while(front < back) {
//         if (arr[front] != arr[back]) {
//             return false;
//         }
//         front++;
//         back--;
//     }
//     return true;
// };