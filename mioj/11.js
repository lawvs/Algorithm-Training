// 构建短字符串
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const [a, b] = line.split(' ').map(s => s.split(''))
    const m = new Map()
    b.forEach(c => {
        if (!m.has(c)) {
            m.set(c, 1)
            return
        }
        m.set(c, m.get(c) + 1)
    })
    return a.every(c => {
        if (!m.has(c) || m.get(c) <= 0) {
            return false
        }
        m.set(c, m.get(c) - 1)
        return true
    })
}

line = 'a b'
ret = solution(line)
ans = false
console.assert(ret === ans, ret, ans)

line = 'aa ab'
ret = solution(line)
ans = false
console.assert(ret === ans, ret, ans)

line = 'aa aab'
ret = solution(line)
ans = true
console.assert(ret === ans, ret, ans)

line = 'uak areuok'
ret = solution(line)
ans = true
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
