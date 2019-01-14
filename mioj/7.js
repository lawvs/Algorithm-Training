// 第一个缺失正数
// https://code.mi.com/problem/list/view?id=7
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const arr = line.split(',').map(s => parseInt(s))
    // console.log(arr)
    const swap = (i, j) => {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    let pos = 0
    while (pos < arr.length) {
        if (arr[pos] > 0 && arr[pos] <= pos && arr[pos] != pos - 1)
            swap(pos, arr[pos] - 1)
        pos++
    }
    // console.log(arr)
    pos = 0
    while (pos < arr.length) {
        if (arr[pos] != pos + 1) {
            return pos + 1
        }
        pos++
    }
    return pos + 1
}

line = '1,2,0'
ret = solution(line)
ans = 3
console.assert(ret === ans, ret, ans)

line = '3,4,-1,1'
ret = solution(line)
ans = 2
console.assert(ret === ans, ret, ans)

line = '-1,-3,-5'
ret = solution(line)
ans = 1
console.assert(ret === ans, ret, ans)

line = '1,2,3'
ret = solution(line)
ans = 4
console.assert(ret === ans, ret, ans)

line = '-1,-10,0'
ret = solution(line)
ans = 1
console.assert(ret === ans, ret, ans)
