#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #206 reverse-linked-list 反转链表
https://leetcode-cn.com/problems/reverse-linked-list/description/
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return head
        pre = None
        while head.next:
            p = head.next
            head.next = pre
            pre = head
            head = p
        head.next = pre
        return head