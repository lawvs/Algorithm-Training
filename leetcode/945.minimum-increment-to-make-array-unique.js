/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    const set = new Set()
    let max = Number.MIN_VALUE
    let res = 0
    A.sort((a, b) => a - b)
    console.log(A)
    for (const n of A) {
        if (n > max) {
            max = n
        }
        if (set.has(n)) {
            max++
            set.add(max)
            res += max - n
            continue
        }
        set.add(n)
    }
    return res
}
