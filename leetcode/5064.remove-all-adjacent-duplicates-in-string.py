class Solution:
    def removeDuplicates(self, S: str) -> str:
        nS = S
        for i in range(97, 123):
            nS = nS.replace(chr(i) + chr(i), '')
        if nS == S:
            return S
        return self.removeDuplicates(nS)
