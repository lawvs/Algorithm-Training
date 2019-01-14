// 买香蕉
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const arr = line
        .split(' ')
        .map(s => parseInt(s))
        .sort((x, y) => y - x)
    // console.log(arr)
    if (arr.length === 0) {
        return 0
    }
    let ret = arr[0]
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i] * (i + 1)
        if (ret > num) {
            continue
        }
        ret = num
    }
    return ret
}

line = '3 1 1 1 1 1 1 1 1 1'
res = solution(line)
ans = 10
console.assert(res === ans, res, ans)

line = '1 2 3'
res = solution(line)
ans = 4
console.assert(res === ans, res, ans)

line = '5 0 29 14'
res = solution(line)
ans = 29
console.assert(res === ans, res, ans)

console.log('All test cases passed.')
