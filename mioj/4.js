// 最长连续数列
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const arr = line.split(',').map(s => parseInt(s))
    // console.log(arr)
    const m = new Map()
    for (const e of arr) {
        m.set(e, true)
    }
    // console.log(m)
    let ret = 0
    for (const k of m.keys()) {
        if (!m.has(k)) {
            continue
        }
        // console.log(k)
        let cnt = 1
        let u = k + 1
        m.delete(k)
        while (m.has(u)) {
            m.delete(u)
            u++
            cnt++
        }
        u = k - 1
        while (m.has(u)) {
            m.delete(u)
            u--
            cnt++
        }
        ret = Math.max(cnt, ret)
    }
    return ret
}

line = '100,4,200,1,3,2'
ret = solution(line)
ans = 4
console.assert(ret === ans, ret, ans)

line = '54,55,300,12'
ret = solution(line)
ans = 2
console.assert(ret === ans, ret, ans)

line = '1'
ret = solution(line)
ans = 1
console.assert(ret === ans, ret, ans)

line = '5,4,3,2,1'
ret = solution(line)
ans = 5
console.assert(ret === ans, ret, ans)

line = '1,2,3,4,5,6'
ret = solution(line)
ans = 6
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
