# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def deep(self, root: 'TreeNode', v: 'int'):
        if not root:
            return 1e9
        if root.val == v:
            return 0
        if not root.left:
            return self.deep(root.right, v) + 1
        if not root.right:
            return self.deep(root.left, v) + 1
        return min(self.deep(root.right, v), self.deep(root.left, v)) + 1

    def parent(self, root: 'TreeNode', v: 'int'):
        if not root:
            print('not root')
            return None
        if root.val == v:
            print('error!', v)
        if not root.left and not root.right:
            print('not son', root.val)
            return None
        if not root.left:
            if root.right.val == v:
                return root
            return self.parent(root.right, v)
        if not root.right:
            if root.left.val == v:
                return root
            return self.parent(root.left, v)
        if root.right.val == v or root.left.val == v:
            return root
        return self.parent(root.right, v) or self.parent(root.left, v)

    def isCousins(self, root: 'TreeNode', x: 'int', y: 'int') -> 'bool':
        # print(self.deep(root, x), self.deep(root, y), self.parent(root, x), self.parent(root, y))
        return self.deep(root, x) == self.deep(root, y) and self.parent(root, x) != self.parent(root, y)
