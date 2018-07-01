#!/usr/bin/env python3
'''
leetcode #104 maximum-depth-of-binary-tree 二叉树的最大深度
https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findDepth(self, root, n):
        if not root:
            return n
        return max(self.findDepth(root.left, n + 1), self.findDepth(root.right, n + 1))

    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        return self.findDepth(root, 0)
