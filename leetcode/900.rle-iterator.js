#!/usr/bin/env node
/**
 * leetcode #900 rle-iterator RLE 迭代器
 * https://leetcode-cn.com/contest/weekly-contest-101/problems/rle-iterator/
 */
/**
 * @param {number[]} A
 */
var RLEIterator = function(AR) {
    this.A = AR
}

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    while (true) {
        if (this.A.length <= 0) {
            return -1
        }
        if (this.A[0] >= n) {
            this.A[0] -= n
            return this.A[1]
        }
        n -= this.A[0]
        this.A.shift()
        this.A.shift()
    }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = Object.create(RLEIterator).createNew(A)
 * var param_1 = obj.next(n)
 */
A = [3, 8, 0, 9, 2, 5]
it = new RLEIterator(A)
console.log(it.next(2))
console.log(it.next(1))
console.log(it.next(1))
console.log(it.next(2))
