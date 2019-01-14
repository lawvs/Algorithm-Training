// TLE
// 米兔的胡萝卜
// Interval Tree / Segment Tree
function buildTree(root, arr, l, r) {
    if (l === r) {
        root.l = l
        root.r = r
        root.val = arr[l]
        // console.log(l, arr[l]) // debug
        return root
    }
    const mid = Math.floor((l + r) / 2)
    root.left = buildTree({}, arr, l, mid)
    root.right = buildTree({}, arr, mid + 1, r)
    root.l = l
    root.r = r
    root.val = Math.max(root.left.val, root.right.val)
    // console.log(root.val, root.left.val, root.right.val) // debug
    return root
}

function query(root, l, r) {
    console.assert(l <= r, l, r)
    if (l > root.r || r < root.l) {
        return -1
    }
    if (l <= root.l && r >= root.r) {
        return root.val
    }
    const mid = Math.floor((root.l + root.r) / 2)
    // console.assert(root.left, root, l, r) // debug
    // console.assert(root.right, root, l, r) // debug
    return Math.max(query(root.left, l, r), query(root.right, l, r))
}

/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
    const [[N, M, R], nums, q] = line
        .split(';')
        .map(s => s.split(' ').map(s => parseInt(s)))
    // console.log([N, M, R], nums, q) // debug
    // init
    const t = buildTree({}, nums, 0, nums.length - 1)
    // console.log(t) // debug
    return q.map(i => query(t, i - R - 1, i + R - 1)).join(' ')
}

line = '6 6 1;2 0 0 0 0 4;1 2 3 4 5 6'
res = solution(line)
console.log(res)
console.assert(ans === res, ans, res)
ans = '2 2 0 0 4 4'
