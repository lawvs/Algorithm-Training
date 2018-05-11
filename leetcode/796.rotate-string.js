/*
 * leetcode #796 rotate-string 旋转字符串
 * https://leetcode-cn.com/problems/rotate-string/description/
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    len = A.length
    if ( A === B) return true
    for (let i = 0; i < len; i++) {
        if ( A === B) return true
        A = A.slice(1, A.length) + A[0]
    }
    return false
};
