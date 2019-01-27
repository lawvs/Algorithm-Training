#!/usr/bin/env python3
# -*- coding: utf-8 -*-


class DisjointSet:
    '''
    并查集
    '''
    parent = None
    rank = None
    dictMode = False

    def __init__(self, l=0, dictMode=False):
        self.dictMode = dictMode
        # list mode #
        if l > 0:
            self.parent = [n for n in range(l)]
            self.rank = [0] * l
            return
        # dict mode #
        if dictMode:
            self.parent = {}
            self.rank = {}
            return
        raise Exception('ERROR!')

    def findRoot(self, w):
        if self.dictMode and not w in self.parent:
            self.parent[w] = w
            return w
        if self.parent[w] == w:
            return w
        else:
            root = self.findRoot(self.parent[w])
            self.parent[w] = root  # 路径压缩
            return root

    def union(self, w1, w2):
        root1 = self.findRoot(w1)
        root2 = self.findRoot(w2)
        if root1 == root2:
            return
        # dict mode #
        if self.dictMode:
            if not root1 in self.rank:
                self.rank[root1] = 0
            if not root2 in self.rank:
                self.rank[root2] = 0
        if self.rank[root1] < self.rank[root2]:  # rank 合并
            root1, root2 = root2, root1  # swap
        elif self.rank[root1] == self.rank[root2]:
            self.rank[root1] = self.rank[root1] + 1
        self.parent[root2] = root1  # union

    def isEqual(self, x, y):
        return self.findRoot(x) == self.findRoot(y)

    def count(self):
        cnt = 0
        l = len(self.parent)
        for i in range(l):
            if self.parent[i] == i:
                cnt = cnt + 1
        return cnt
