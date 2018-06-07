#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #160 intersection-of-two-linked-lists 相交链表
https://leetcode-cn.com/problems/intersection-of-two-linked-lists/description/
'''
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        pa = headA
        pb = headB
        if not pa or not pb:
            return None
        while pa.next and pb.next:
            pa = pa.next
            pb = pb.next

        if not pa.next and not pb.next and pa != pb:
            return None

        if pa.next:
            l = pa
            end = pb
            fast = headA
            slow = headB
        else:
            l = pb
            end = pa
            fast = headB
            slow = headA

        while l.next and l != end:
            l = l.next
            fast = fast.next
        if l != end:
            return None

        while fast != slow:
            fast = fast.next
            slow = slow.next
        return fast
