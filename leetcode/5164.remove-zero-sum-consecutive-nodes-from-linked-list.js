/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
  const s = []
  let p = head
  while (p) {
    let sum = p.val
    let p2 = s.length - 1
    while (p2 >= 0 && sum !== 0) {
      sum += s[p2].val
      p2--
    }
    if (sum === 0) {
      while (s.length && s.length - 1 !== p2) {
        s.pop()
      }
    } else {
      s.push(p)
    }
    p = p.next
  }
  // console.log(s)
  if (!s.length) {
    return null
  }
  s.reduce((pre, cur) => {
    pre.next = cur
    return cur
  })
  s[s.length - 1].next = null
  return s[0]
}
