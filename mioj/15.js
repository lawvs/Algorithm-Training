// 和为零的三元组
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const arr = line
        .split(',')
        .map((s, i) => parseInt(s))
        .sort((a, b) => a - b)

    // console.log(arr)
    if (arr.length < 3) {
        return 0
    }
    let ret = 0
    let pos = arr.length - 1
    let prei = true
    let prej = true
    for (let i = 0; i < pos; i++) {
        if (arr[i] > 0) break
        pos = arr.length - 1
        while (arr[i] === prei) i++ // uniq
        prei = arr[i]
        for (let j = i + 1; j < pos; j++) {
            // if (arr[j] > 0) break
            while (arr[j] === prej) j++ // uniq
            prej = arr[j]
            // console.log(arr[i], arr[j])
            const tar = (arr[i] + arr[j]) * -1
            while (tar < arr[pos]) pos--
            if (pos <= j) break
            if (tar === arr[pos]) {
                // console.log(arr[i], arr[j], tar)
                ret++
            }
        }
    }
    return ret
}

line = '-1,0,1,2,-1,-4'
ret = solution(line)
ans = 2
console.assert(ret === ans, ret, ans)

line = '-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6'
ret = solution(line)
ans = 6
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
