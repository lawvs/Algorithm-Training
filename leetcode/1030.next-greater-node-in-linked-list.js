/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  if (!head) {
    return []
  }
  const arr = new Array(10001).fill(0)
  let i = 0
  const stack = [[-1, Number.MAX_SAFE_INTEGER]]
  while (head) {
    let top = stack[stack.length - 1]
    // console.log(head.val, stack)
    while (head.val > top[1]) {
      arr[top[0]] = head.val
      stack.pop()
      top = stack[stack.length - 1]
    }
    stack.push([i, head.val])
    head = head.next
    i++
  }
  return arr.slice(0, i)
}
