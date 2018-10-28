/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
    if (A.length === 0) {
        return 0
    }

    if (S === 0) {
        {
            let cnt = 0
            arr = A.join('')
                .split('1')
                .filter(s => s !== '1')
            console.log(arr)
            return A.join('')
                .split('1')
                .filter(s => s !== '1')
                .reduce((pre, cur) => {
                    pre = pre + ((cur.length + 1) * cur.length) / 2
                    // console.log(pre)
                    return pre
                }, 0)
        }
    }
    let start = 0
    let end = 1
    let prefix = 1
    let suffix = 1
    let cnt = 0
    let sum = A[0]
    while (sum < S) {
        if (end >= A.length) {
            return 0
        }
        sum += A[end++]
    }
    // console.log(start, end)

    while (end <= A.length) {
        while (A[start] === 0) {
            start++
            prefix++
        }
        // console.log(start, end)
        while (end < A.length && A[end] === 0) {
            end++
            suffix++
        }
        // console.log(prefix, suffix)
        cnt += prefix * suffix
        prefix = 1
        suffix = 1
        start++
        end++
    }
    return cnt
}

A = [1, 0, 1, 0, 1]
S = 2
ans = 4
ret = numSubarraysWithSum(A, S)
console.assert(ret === ans, ret, ans)

A = [1, 0, 1, 0, 1, 0]
S = 2
ans = 6
ret = numSubarraysWithSum(A, S)
console.assert(ret === ans, ret, ans)

A = [0, 1, 0, 1, 0, 1]
S = 2
ans = 6
ret = numSubarraysWithSum(A, S)
console.assert(ret === ans, ret, ans)

A = [0, 0, 0, 0, 0]
S = 0
ans = 15
ret = numSubarraysWithSum(A, S)
console.assert(ret === ans, ret, ans)

A = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
S = 1
ans = 10
ret = numSubarraysWithSum(A, S)
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
