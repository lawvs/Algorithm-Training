class Solution:
    def confusingNumber(self, N: int) -> bool:
        d = dict()
        d['0'] = '0'
        d['1'] = '1'
        d['6'] = '9'
        d['8'] = '8'
        d['9'] = '6'
        strNum = str(N)
        ns = ''
        for i in range(len(strNum)):
            # print(strNum[i])
            if strNum[i] in d:
                ns = d[strNum[i]] + ns
            else:
                return False
        return int(ns) != N
