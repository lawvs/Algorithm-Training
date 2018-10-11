def answer(total_lambs):
    # your code here
    if total_lambs <= 3:
        return 0

    def minimumHenchmen(remainLambs):
        if remainLambs <= 0:
            return 0
        if remainLambs == 1:
            return 1
        if remainLambs == 2:
            return 2
        num = 0
        # for i in range(1000):
        #     print 2 ** i
        #     if 2 ** i > 1e9:
        #         break
        prices = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824]
        for i in range(len(prices)):
            if remainLambs >= prices[i]:
                remainLambs -= prices[i]
            else:
                if i >= 2 and remainLambs >= prices[i - 1] + prices[i - 2]:
                    i += 1
                num = i
                break
        return num

    def maximumHenchmen(remainLambs):
        num = 0
        # def F():
        #     a,b = 0,1
        #     while True:
        #         yield a
        #         a, b = b, a + b
        # num = 0
        # gen = F()
        # for num in gen:
        #     print num
        #     if num > 1e9:
        #         break
        prices = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170]
        for i in range(len(prices)):
            remainLambs -= prices[i]
            if remainLambs < 0:
                num = i
                break
        return num

    minNum = minimumHenchmen(total_lambs)
    maxNum = maximumHenchmen(total_lambs)

    # print(total_lambs, maxNum, minNum, abs(maxNum - minNum))
    return abs(maxNum - minNum)

if __name__ == '__main__':
    # 0
    # 0 - 0
    # 0 - 0

    # 1
    # 1 - 0
    # 1 - 0

    # 2
    # 1 1 - 0
    # 1 1 - 0

    # 3
    # 1 2 - 0
    # 1 1 - 1

    output = 0
    for total_lambs in range(0, 4):
        res = answer(total_lambs)
        # print(res)
        assert(res == output)

    # 4
    # 1 2 - 1
    # 1 1 2 - 0
    total_lambs = 4
    output = 1 # 3 - 2
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    # 6
    # 1 2 3 - 0
    # 1 1 2 - 2
    total_lambs = 6
    output = 0 # 3 - 3
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    for total_lambs in range(7, 10):
        output = 1
        res = answer(total_lambs)
        # print(res)
        assert(res == output)

    # 10
    # 1 2 4 - 3
    # 1 1 2 3 - 3
    total_lambs = 10
    output = 1 # 4 - 3
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    # 11
    # 1 2 4 - 4
    # 1 1 2 3 - 4
    total_lambs = 11
    output = 1 # 4 - 3
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    # 12
    # 1 2 4 - 5
    # 1 1 2 3 5 - 0
    total_lambs = 12
    output = 2 # 5 - 3
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    # 13
    # 1 2 4 6 - 0
    # 1 1 2 3 5 - 1
    total_lambs = 13
    output = 1 # 5 - 4
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    # 14
    # 1 2 4 7 - 0
    # 1 1 2 3 5 - 2
    total_lambs = 14
    output = 1 # 5 - 4
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    # 15
    # 1 2 4 8 - 0
    # 1 1 2 3 5 - 3
    total_lambs = 15
    output = 1 # 5 - 4
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    # 16
    # 1 2 4 8 - 1
    # 1 1 2 3 5 - 4
    total_lambs = 16
    output = 1 # 5 - 4
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    # 143
    # 1 2 4 8 16 32 64 - 16
    # 1 1 2 3 5 8 13 21 34 55 - 0
    total_lambs = 143
    output = 3 # 10 - 7
    res = answer(total_lambs)
    # print(res)
    assert(res == output)

    print('All test cases passed.')
