// DisjointSet
class DisjointSet {
    constructor(n) {
        this.DEFAULT_VALUE = Number.MIN_VALUE
        this.map = new Map()
    }

    findRoot(n) {
        if (this.map.get(n) === this.DEFAULT_VALUE) {
            return n
        }
        const parent = this.findRoot(this.map.get(n))
        this.map.set(n, parent)
        return parent
    }

    union(a, b) {
        if (!this.map.has(a)) {
            this.map.set(a, this.DEFAULT_VALUE)
        }
        if (!this.map.has(b)) {
            this.map.set(b, this.DEFAULT_VALUE)
        }
        const roota = this.findRoot(a)
        const rootb = this.findRoot(b)
        if (roota === rootb) {
            return roota
        }
        this.map.set(rootb, roota)
        return roota
    }

    /**
     * @returns {number}
     */
    count() {
        let cnt = 0
        this.map.forEach(v => {
            if (v === this.DEFAULT_VALUE) {
                cnt++
            }
        })
        // console.log(cnt)
        return cnt
    }
}

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const disjointSet = new DisjointSet(stones.length)

    for (const [x, y] of stones) {
        disjointSet.union(x, y + 10000)
    }
    return stones.length - disjointSet.count()
}

const stones = [[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]
const res = removeStones(stones)
console.log(res)
