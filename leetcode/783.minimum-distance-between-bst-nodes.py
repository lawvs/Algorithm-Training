#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #783 minimum-distance-between-bst-nodes 二叉搜索树结点最小距离
https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/description/
'''
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    MAX_NUM = float('inf')
    l = []
    def addNode(self, node):
        if not node:
            return
        self.l.append(node.val)
        self.addNode(node.left)
        self.addNode(node.right)

    def minDiffInBST(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.l = []
        minDiff = self.MAX_NUM
        self.addNode(root)
        self.l.sort()
        for i in range(len(self.l) - 1):
            minDiff = min(minDiff, self.l[i + 1] - self.l[i])
        return minDiff
