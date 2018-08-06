#!/usr/bin/env python3
'''
leetcode #110 balanced-binary-tree 平衡二叉树
https://leetcode-cn.com/problems/balanced-binary-tree/description/
'''
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


def depthStat(root):
    if not root:
        return 0
    leftV = depthStat(root.left)
    if leftV == -1:
        return -1  # raise
    rightV = depthStat(root.right)
    if rightV == -1:
        return -1
    if abs(leftV - rightV) > 1:
        return -1  # error stat
    return 1 + max(leftV, rightV)


class Solution:

    def isBalanced(self, root) -> bool:
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        return depthStat(root) >= 0
