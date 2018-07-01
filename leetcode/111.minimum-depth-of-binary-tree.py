#!/usr/bin/env python3
'''
leetcode #111 minimum-depth-of-binary-tree 二叉树的最小深度
https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from collections import deque, namedtuple

class Solution:
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0
        Node =  namedtuple('Node', ['root', 'dep'])
        dq = deque()
        rootNode = Node(root, 0)
        dq.append(rootNode)
        while len(dq) > 0:
            node = dq.popleft()
            if not node.root.left and not node.root.right:
                return node.dep + 1
            if node.root.left:
                dq.append(Node(node.root.left, node.dep + 1))
            if node.root.right:
                dq.append(Node(node.root.right, node.dep + 1))
