class Solution:
    def powerfulIntegers(self, x, y, bound):
        """
        :type x: int
        :type y: int
        :type bound: int
        :rtype: List[int]
        """
        if x == 1 and y == 1:
            if bound >= 2:
                return [2]
            else:
                return []
        l = []
        i = 0
        while x ** i <= bound:
            tar = x ** i
            j = 0
            while tar < bound:
                tar = x ** i + y ** j
                if tar <= bound:
                    l.append(tar)
                if y == 1:
                    break
                j += 1

            if x == 1:
                break
            i += 1

        return list(set(l))


s = Solution()
ret = s.powerfulIntegers(2, 3, 10)
print(ret)

ret = s.powerfulIntegers(1, 2, 10)
print(ret)
