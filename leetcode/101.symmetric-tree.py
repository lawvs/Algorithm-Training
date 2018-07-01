#!/usr/bin/env python3
'''
leetcode #101 symmetric-tree 对称二叉树
https://leetcode-cn.com/problems/symmetric-tree/description/
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSymmetricTree(self, p, q):
        if p == None and q == None:
            return True
        elif p and q:
            return p.val == q.val and self.isSymmetricTree(p.left, q.right) and self.isSymmetricTree(p.right, q.left)
        else:
            return False

    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        return self.isSymmetricTree(root.left, root.right)
