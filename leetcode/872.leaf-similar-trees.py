#!/usr/bin/env python3
'''
leetcode #872 leaf-similar-trees 叶子相似的树
https://leetcode-cn.com/contest/weekly-contest-94/problems/leaf-similar-trees/
'''
import operator

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def leafSimilar(self, root1, root2):
        """
        :type root1: TreeNode
        :type root2: TreeNode
        :rtype: bool
        """
        if not root1 and not root2:
            return True

        def dfs(root, l=[]):
            if not root.left and not root.right:
                l.append(root.val)
                return l
            if root.left:
                dfs(root.left, l)
            if root.right:
                dfs(root.right, l)
            return l

        left1 = dfs(root1)
        left2 = dfs(root2)
        print(left1, left2)
        if operator.eq(left1, left2):
            return True
        return False
