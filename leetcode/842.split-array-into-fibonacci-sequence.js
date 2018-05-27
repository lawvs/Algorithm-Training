/*
 * leetcode #842 split-array-into-fibonacci-sequence 将数组拆分成斐波那契序列
 * https://leetcode-cn.com/contest/weekly-contest-86/problems/split-array-into-fibonacci-sequence/
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    for (let i = 1; i < S.length; i++) {
        for (let j = i + 1; j < S.length; j++) {
            const stra = S.slice(0, i)
            const a = parseInt(stra)
            const strb = S.slice(i, j)
            const b = parseInt(strb)

            if (stra.startsWith('0') && a !== 0) {
                continue
            }
            if (strb.startsWith('0') && b !== 0) {
                continue
            }

            let str = S.slice(j)
            let sum = a + b
            if (str.length < sum.length) {
                continue
            }

            const l = [a, b]
            let flag = true
            while (str.length > 0) {
                // console.log(sum, str)
                if (!str.startsWith(sum + '') || sum > 2 ** 31 - 1) {
                    flag = false
                    break;
                }
                str = str.slice((sum + '').length)
                l.push(sum)
                sum = l[l.length - 1] + l[l.length - 2]
            }
            if (flag === false) {
                continue
            }
            return l
        }
    }
    return []
};

// const S = "11235813"
// const output = [1,1,2,3,5,8,13]
// const ret = splitIntoFibonacci(S)
// console.log(ret)

// const S = "0123"
// const output = []
// const ret = splitIntoFibonacci(S)
// console.log(ret)
