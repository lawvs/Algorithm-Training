/**
 * @param {string} A
 * @param {string} B
 * @param {string} S
 * @return {string}
 */
var smallestEquivalentString = function(A, B, S) {
  const map = new Map()
  const findRoot = n => {
    if (!map.has(n)) {
      map.set(n, n)
      return n
    }
    if (map.get(n) === n) {
      return n
    }
    const parent = findRoot(map.get(n))
    map.set(n, parent)
    return parent
  }

  const union = (a, b) => {
    if (!map.has(a)) {
      map.set(a, a)
    }
    if (!map.has(b)) {
      map.set(b, b)
    }
    const roota = findRoot(a)
    const rootb = findRoot(b)
    if (roota === rootb) {
      return roota
    }
    map.set(rootb, roota)
    return roota
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      continue
    }
    const rootA = findRoot(A[i])
    const rootB = findRoot(B[i])
    if (rootA < rootB) {
      union(A[i], B[i])
    } else {
      union(B[i], A[i])
    }
  }
  return S.split('')
    .map(c => findRoot(c))
    .join('')
}
