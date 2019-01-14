// 高弗雷勋爵
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const arr = line
        .split(' ')
        .map(s => parseInt(s))
        .sort((a, b) => a - b)
    // console.log(arr) // debug
    let ret = 0 // 子弹数量
    let harm = 0 // 当前累加伤害
    let pos = 0
    while (pos < arr.length) {
        const cnt = Math.ceil((arr[pos] - harm) / 2) // 当前敌人还需子弹数量
        // console.log(arr[pos], cnt) // debug
        ret += cnt
        harm += cnt * 2
        while (pos < arr.length && harm >= arr[pos]) {
            // console.log(ret, harm, arr[pos]) // debug
            pos++
        }
        harm += 2
    }
    return ret
}

line = '1 12 3 6 10'
ret = solution(line)
console.log(ret)
ans = 2
console.assert(ret === ans)

line = '14 81 93 97 77 80 84 63 94 60 98 36 42 50 20 39 56 28 24 79'
ret = solution(line)
console.log(ret)
ans = 33
console.assert(ret === ans)

line = '76 75 33 17 77 6 66 89 40 82 20 46'
ret = solution(line)
console.log(ret)
ans = 35
console.assert(ret === ans)
