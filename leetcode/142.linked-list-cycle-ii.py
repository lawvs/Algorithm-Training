#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #142 linked-list-cycle-ii 环形链表 II
https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
'''
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        p1 = p2 = head
        while p2 and p2.next:
            p2 = p2.next.next
            p1 = p1.next
            if p1 == p2:
                break

        if not p2 or not p2.next:
            return None

        p2 = head
        while p1 != p2:
            p2 = p2.next
            p1 = p1.next
        return p1
