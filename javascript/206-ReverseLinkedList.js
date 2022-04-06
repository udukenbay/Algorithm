/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var prev = null;
    
    while(head) {
        // save next or you lose it!!!
        var temp = head.next;
        // reverse pointer
        head.next = prev;
        // increment previous to current node
        prev = head;
        // increment node to next node or null at end of list
        head = temp;
    }
    return prev; // Change the list head !!!
};

//[1,2,3]
//temp      = head.next = [2,3]     [3]     null
//head.next = prev      = null      [1]     [2,1]
//prev      = head      = [1]       [2,1]   [3,2,1]
//head      = temp      = [2,3]     [3]     null