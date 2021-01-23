/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  const n = encoded.length + 1
  const prefix = [encoded[0]]
  for (let i = 1; i < encoded.length; i++) {
    prefix[i] = prefix[i - 1] ^ encoded[i]
  }
  let withoutHead = 0
  for (const num of prefix) {
    withoutHead ^= num
  }
  let head = withoutHead
  for (let i = 1; i <= n; i++) {
    head ^= i
  }
  const ans = [head]
  let cur = head
  for (const num of encoded) {
    const decode = cur ^ num
    ans.push(decode)
    cur = decode
  }
  return ans
}
