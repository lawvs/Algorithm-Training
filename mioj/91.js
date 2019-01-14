// 不要乱改代码
// https://code.mi.com/problem/list/view?id=91
/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const arr = line.split(';')
    const a = arr.shift().split(' ') // 感染者
    const b = arr.map(s => {
        s = s.split(' ')
        s.shift() // delete file
        return s
    }) // 其他人
    const wang = 'neighbor_wang'
    // console.log(arr) // debug
    // console.log(a) // debug
    // console.log(b) // debug
    const m = new Map() // 并查集
    const findRoot = n => {
        if (!m.has(n)) {
            m.set(n, n)
            return n
        }
        if (m.get(n) === n) {
            return n
        }
        const root = findRoot(m.get(n))
        m.set(n, root)
        return root
    }
    const union = (a, b) => {
        const ra = findRoot(a)
        const rb = findRoot(b)
        if (ra === rb) {
            return ra
        }
        // console.log(ra, rb) // debug
        m.set(rb, ra)
        return ra
    }
    // init
    for (const i of a) {
        union(a[0], i)
    }
    for (const arr of b) {
        for (let i = 1; i < arr.length; i++) {
            // console.log(arr[0], arr[i]) // debug
            union(arr[0], arr[i])
            // fast go die
            if (findRoot(wang) === findRoot(a[0])) {
                return 'go die'
            }
        }
    }
    // console.log(m) // debug
    if (findRoot(wang) === findRoot(a[0])) {
        // console.log(findRoot(wang)) // debug
        // console.log(findRoot(a[0])) // debug
        return 'go die'
    }
    return 'good programmer'
}

line =
    'xiaohong;Main.java neighbor_wang xiaoming;IndexController.java xiaohong xiaoming'
ans = solution(line)
console.log(ans)

line =
    'xiaohong god;DoSomeService.java xiaoqiang neighbor_wang;MagicCode.scala junjun xiaohong'
ans = solution(line)
console.log(ans)
