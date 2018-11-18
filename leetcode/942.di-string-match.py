class Solution:
    def diStringMatch(self, S):
        """
        :type S: str
        :rtype: List[int]
        """
        li = [0]
        minN, maxN = 0, 0
        for n in S:
            if n == 'I':
                maxN += 1
                li.append(maxN)
            elif n == 'D':
                minN -= 1
                li.append(minN)
        offset = minN
        li = list(map(lambda n: n - offset, li))
        return li
