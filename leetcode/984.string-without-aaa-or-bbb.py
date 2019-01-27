class Solution:
    def strWithout3a3b(self, A, B):
        """
        :type A: int
        :type B: int
        :rtype: str
        """
        s = ''
        while True:
            if A == 0 and B == 0:
                return s
            if A > B: # aab
                flag = 0
                while A > 0 and flag < 2:
                    s += 'a'
                    A -= 1
                    flag +=1
                flag = 0
                while B > 0 and flag < 1:
                    s += 'b'
                    B -= 1
                    flag +=1
            elif A < B: # bba
                flag = 0
                while B > 0 and flag < 2:
                    s += 'b'
                    B -= 1
                    flag +=1
                flag = 0
                while A > 0 and flag < 1:
                    s += 'a'
                    A -= 1
                    flag +=1
            else: # ba
                flag = 0
                while B > 0 and flag < 1:
                    s += 'b'
                    B -= 1
                    flag +=1
                flag = 0
                while A > 0 and flag < 1:
                    s += 'a'
                    A -= 1
                    flag +=1