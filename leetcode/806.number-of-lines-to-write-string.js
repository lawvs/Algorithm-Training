/*
 * leetcode #806 number-of-lines-to-write-string 写字符串需要的行数
 * https://leetcode-cn.com/problems/number-of-lines-to-write-string/description/
 */

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let count = 1
    let line = 100
    for( const c of S) {
        const wid = widths[c.charCodeAt() - 'a'.charCodeAt()]
        if (wid <= line) {
            line -= wid
            continue
        }
        count++
        line = 100 - wid
    }
    return [count, 100 - line]
};
