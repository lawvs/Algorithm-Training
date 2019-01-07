/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
  if (!root && !voyage) {
    // null
    return []
  }
  if (root && (!voyage || voyage.length <= 0)) {
    return [-1]
  }
  if (!root && voyage && voyage.length > 0) {
    return [-1]
  }
  if (root.val !== voyage[0]) {
    return [-1]
  }
  let lt = root.left
  let rt = root.right
  if (!lt && !rt) {
    // root null null
    if (voyage.length === 1) {
      return []
    }
    return [-1]
  }
  if (!lt) {
    // root null rt
    return flipMatchVoyage(rt, voyage.slice(1))
  }
  if (!rt) {
    // root lt null
    return flipMatchVoyage(lt, voyage.slice(1))
  }
  // root lt rt
  if (voyage.length < 3) {
    return [-1]
  }
  let lI = voyage.indexOf(lt.val)
  let rI = voyage.indexOf(rt.val)
  const arr = []
  if (lI !== 1 && rI !== 1) {
    return [-1]
  }
  if (rI === 1) {
    // swap
    ;[lI, rI] = [rI, lI]
    ;[lt, rt] = [rt, lt]
    arr.push(root.val)
  }
  const lv = voyage.slice(1, rI)
  const rv = voyage.slice(rI)
  //   console.log(lv, rv) // debug
  const lr = flipMatchVoyage(lt, lv)
  const rr = flipMatchVoyage(rt, rv)
  if (lr.includes(-1) || rr.includes(-1)) {
    return [-1]
  }
  return [...arr, ...lr, ...rr]
}
