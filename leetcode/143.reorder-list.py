#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #143 reorder-list 重排链表
https://leetcode-cn.com/problems/reorder-list/description/
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    l = []

    def initList(self, node):
        self.l = []
        p = node
        while p:
            self.l.append(p)
            p = p.next

    def getEnd(self):
        if len(self.l) <= 0:
            return None
        p = self.l.pop()
        return p

    def reorderList(self, head):
        """
        :type head: ListNode
        :rtype: void Do not return anything, modify head in-place instead.
        """
        if not head:
            return head
        self.initList(head)

        start = head
        end = self.getEnd()
        while start != end and start.next != end:
            # print(start.val, end.val)
            nextNode = start.next
            start.next = end
            start = nextNode
            end.next = nextNode
            end = self.getEnd()
            end.next = None
