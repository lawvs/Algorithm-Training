#!/usr/bin/env node
/**
 * leetcode #155 min-stack 最小栈
 * https://leetcode-cn.com/problems/min-stack/description/
 * tag: stack
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [Number.MAX_VALUE]
    this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    x <= this.minStack.slice(-1)[0] && this.minStack.push(x)
    this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.slice(-1)[0] === this.minStack.slice(-1)[0] &&
        this.minStack.pop()
    this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.slice(-1)[0]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.slice(-1)[0]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
