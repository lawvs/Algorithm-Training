/*
 * leetcode #7 reverse-integer 颠倒整数
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * 创建时间：2018-3-18 23:44:44
 * 通过时间：2018-3-19 00:09:12
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ret = '';
    x = x + '';

    const flag = x > 0 ? 0 : 1;
    for (let i = x.length - 1; i >= flag; i--) {
        ret += x[i];
    }
    if (x < 0) {
        ret = ret * -1;
    } else {
        ret = ret * 1.0;
    }

    if (ret > 2147483647 || ret < -2147483648) {
        return 0;
    }

    return ret;
};
