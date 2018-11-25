class Solution:
    def validateStackSequences(self, pushed, popped):
        """
        :type pushed: List[int]
        :type popped: List[int]
        :rtype: bool
        """
        stack = []
        while pushed:
            stack.append(pushed.pop(0))
            while stack and stack[-1] == popped[0]:
                stack.pop()
                popped.pop(0)
        return not stack


def main():
    s = Solution()
    pushed = [1, 2, 3, 4, 5]
    popped = [4, 3, 5, 1, 2]

    # pushed = [1, 2, 3, 4, 5]
    # popped = [4, 5, 3, 2, 1]
    res = s.validateStackSequences(pushed, popped)
    print(res)


if __name__ == '__main__':
    main()
