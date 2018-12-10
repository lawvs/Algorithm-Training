class Solution:
    def isAlienSorted(self, words, order):
        """
        :type words: List[str]
        :type order: str
        :rtype: bool
        """
        d = {}
        for i in range(0, 26):
            d[order[i]] = chr(i + ord('a'))
        m = map(lambda w: ''.join(map(lambda c: d[c], w)), words)
        l = list(m)
        # print(l, sorted(l))
        return ''.join(l) == ''.join(sorted(l))
