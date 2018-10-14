/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    pos1 = 0
    pos2 = 1

    while (true) {
        pos1
        while (pos1 < A.length && A[pos1] % 2 !== 1) {
            pos1 += 2
        }
        while (pos2 < A.length && A[pos2] % 2 !== 0) {
            pos2 += 2
        }

        if (pos1 >= A.length || pos2 >= A.length) {
            return A
        }

        const tmp = A[pos1]
        A[pos1] = A[pos2]
        A[pos2] = tmp
    }

    // return A
}

A = [4, 2, 5, 7]

ret = sortArrayByParityII(A)
console.log(ret)
