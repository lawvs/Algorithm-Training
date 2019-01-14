// 大数相减
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    let [a, b] = line.split('-').map(s => s.split('').reverse())
    // console.assert(a > b)
    let pos = 0
    let ext = 0
    while (pos < a.length && pos < b.length) {
        let n = a[pos] - b[pos] - ext
        ext = 0
        if (n < 0) {
            n += 10
            ext++
        }
        // console.assert(n >= 0, pos, n)
        a[pos] = n
        pos++
    }
    while (ext > 0) {
        a[pos] -= ext
        ext = 0
        if (a[pos] < 0) {
            a[pos] += 10
            ext++
        }
        // console.assert(a[pos] >= 0, pos, a[pos])
        pos++
    }
    pos = a.length - 1
    while (pos > 0 && a[pos] === 0) pos-- // 0
    // console.log(a, pos)
    return a
        .slice(0, pos + 1) // delete 0
        .reverse()
        .join('')
}

line = '99-9'
ret = solution(line)
ans = '90'
console.assert(ret === ans, ret, ans)

line = '100-100'
ret = solution(line)
ans = '0'
console.assert(ret === ans, ret, ans)

line = '100-1'
ret = solution(line)
ans = '99'
console.assert(ret === ans, ret, ans)

line = '100-99'
ret = solution(line)
ans = '1'
console.assert(ret === ans, ret, ans)

line =
    '1231231237812739878951331231231237812739878951331231231237812739878951331231231237812739878951331231231237812739878951331231231237812739870-89513312312312378127398789513312312312378127398789513312312312378127398789513'
ret = solution(line)
ans =
    '1231231237812739878951331231231237812739878951331231231237812650365639018918853110413950365639018918853110413950365639018918853110413950357'
console.assert(ret === ans, ret, ans)
