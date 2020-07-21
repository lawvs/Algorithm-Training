const m: Record<string, boolean> = {}

function isInterleave(s1: string, s2: string, s3: string): boolean {
  // console.log(s1, s2, s3)
  const k = s1 + '+' + s2 + '+' + s3
  if (m[k] !== undefined) {
    return m[k]
  }
  if (!s3) {
    if (!s1 && !s2) {
      m[k] = true
      return true
    }
    m[k] = false
    return false
  }
  if (s3[0] !== s1[0] && s3[0] !== s2[0]) {
    m[k] = false
    return false
  }
  if (s1[0] === s2[0]) {
    const ret =
      isInterleave(s1.slice(1), s2, s3.slice(1)) ||
      isInterleave(s1, s2.slice(1), s3.slice(1))
    m[k] = ret
    return ret
  }
  if (s3[0] === s1[0]) {
    const ret = isInterleave(s1.slice(1), s2, s3.slice(1))

    m[k] = ret
    return ret
  }
  // s3[0] === s2[0]
  const ret = isInterleave(s1, s2.slice(1), s3.slice(1))
  m[k] = ret
  return ret
}
