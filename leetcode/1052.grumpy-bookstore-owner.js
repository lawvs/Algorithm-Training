/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let basic = customers.reduce(
    (pre, cur, i) => (grumpy[i] ? pre : pre + cur),
    0
  )
  let add = 0
  for (let i = 0; i < X; i++) {
    if (grumpy[i]) {
      add += customers[i]
    }
  }
  let max = add
  for (let i = X; i < customers.length; i++) {
    if (grumpy[i]) {
      add += customers[i]
    }
    if (grumpy[i - X]) {
      add -= customers[i - X]
    }
    max = Math.max(max, add)
  }
  return basic + max
}
