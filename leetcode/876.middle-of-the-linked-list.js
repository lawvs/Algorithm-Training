#!/usr/bin/env node
/**
 * leetcode #876 middle-of-the-linked-list 链表的中间结点
 * https://leetcode-cn.com/contest/weekly-contest-95/problems/middle-of-the-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let cnt = 1
    let node = head
    while (node.next) {
        node = node.next
        cnt++
    }
    // console.log(cnt)
    let tar = Math.floor(cnt / 2)
    while(tar-- > 0) {
        head = head.next
    }
    return head
};