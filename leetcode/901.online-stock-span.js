#!/usr/bin/env node
/**
 * leetcode #901 online-stock-span 股票价格跨度
 * https://leetcode-cn.com/contest/weekly-contest-101/problems/online-stock-span/
 */
var StockSpanner = function() {
    this.arr = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    // console.log(this.arr)
    this.arr.push(price)
    let d = 0
    let pos = this.arr.length - 1
    while (pos >= 0 && this.arr[pos] <= price) {
        pos--
        d++
    }
    return d
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = Object.create(StockSpanner).createNew()
 * var param_1 = obj.next(price)
 */
it = new StockSpanner()
console.log(it.next(100))
console.log(it.next(80))
console.log(it.next(60))
console.log(it.next(70))
console.log(it.next(60))
console.log(it.next(75))
console.log(it.next(85))
