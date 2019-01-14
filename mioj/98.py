# 买香蕉
def solution(line):
    arr = line.split(' ')
    arr = list(map(int, arr))
    arr.sort(reverse=True)
    # print(arr)
    if len(arr) == 0:
        return 0
    ret = arr[0]
    n = 0
    for i in arr[1:]:
        n += 1
        num = i * (n + 1)
        if ret > num:
            continue
        ret = num
    return ret


line = '3 1 1 1 1 1 1 1 1 1'
res = solution(line)
ans = 10
assert(res == ans, res, ans)

line = '1 2 3'
res = solution(line)
ans = 4
print(res)
assert(res == ans)

line = '5 0 29 14'
res = solution(line)
ans = 29
print(res)
assert(res == ans)

print('All test cases passed.')
