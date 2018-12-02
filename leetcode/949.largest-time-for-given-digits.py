import itertools


class Solution:
    def largestTimeFromDigits(self, A):
        """
        :type A: List[int]
        :rtype: str
        """
        # A = list(map(str, A))
        l = itertools.permutations(A, 4)
        l = filter(lambda n: n[0] * 10 + n[1] <
                   24 and n[2] * 10 + n[3] < 60, l)
        l = list(l)
        l.sort(reverse=True)
        # print(l)
        if len(l) < 1:
            return ''
        ans = l[0]
        return '{}{}:{}{}'.format(ans[0], ans[1], ans[2], ans[3])


def main():
    s = Solution()
    A = [1, 2, 3, 4]
    # A = [0, 0, 3, 0]
    # A = [2, 0, 6, 6]
    ret = s.largestTimeFromDigits(A)
    print(ret)


if __name__ == '__main__':
    main()
