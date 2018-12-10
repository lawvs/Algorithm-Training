/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
    const m = new Map()
    A.forEach(v => {
        if (m.has(v)) {
            m.set(v, m.get(v) + 1)
        } else {
            m.set(v, 1)
        }
    })
    const sm = new Map()
    return A.sort((a, b) => a - b).every(v => {
        if (sm.has(v) && sm.get(v) > 0) {
            sm.set(v, sm.get(v) - 1)
            // console.log(v, sm.get(v))
            return true
        }

        if (v % 2 === 1 && (!m.has(2 * v) || m.get(2 * v) <= 0)) {
            return false
        } else if (v % 2 === 1 && m.has(2 * v)) {
            m.set(2 * v, m.get(2 * v) - 1)
            m.set(v, m.get(v) - 1)
            sm.has(2 * v) ? sm.set(2 * v, sm.get(2 * v) + 1) : sm.set(2 * v, 1)
            return m.get(2 * v) >= 0
        }

        if (m.has(v / 2) && m.get(v / 2) > 0) {
            m.set(v, m.get(v) - 1)
            m.set(v / 2, m.get(v / 2) - 1)
            sm.has(v / 2) ? sm.set(v / 2, sm.get(v / 2) + 1) : sm.set(v / 2, 1)
            return m.get(v / 2) >= 0
        } else if (m.has(v * 2) && m.get(v * 2) > 0) {
            m.set(v, m.get(v) - 1)
            m.set(2 * v, m.get(2 * v) - 1)
            sm.has(2 * v) ? sm.set(2 * v, sm.get(2 * v) + 1) : sm.set(2 * v, 1)
            return m.get(2 * v) >= 0
        }
        return false
    })
}

A = [-8, -4, -2, -1, 0, 0, 1, 2, 4, 8]
A = [-4, -2, 0, 0, 2, 2, 4, 4, 4, 4]
ret = canReorderDoubled(A)
console.log(ret)
