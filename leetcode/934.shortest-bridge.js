/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const dfs = (i, j) => {
        A[i][j] = 2
        for (let d of dir) {
            const x = i + d[0]
            const y = j + d[1]
            if (
                x >= 0 &&
                y >= 0 &&
                x < A.length &&
                y < A[x].length &&
                A[x][y] === 1
            ) {
                dfs(x, y)
            }
        }
    }

    let flag = false
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] === 1) {
                dfs(i, j)
                flag = true
                break
            }
        }
        if (flag) {
            break
        }
    }
    // console.log(A)

    let cnt = 0
    const newMap = JSON.parse(JSON.stringify(A))
    while (true) {
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A[i].length; j++) {
                if (A[i][j] === 2) {
                    for (let d of dir) {
                        const x = i + d[0]
                        const y = j + d[1]
                        if (
                            x >= 0 &&
                            y >= 0 &&
                            x < A.length &&
                            y < A[x].length
                        ) {
                            if (A[x][y] === 1) {
                                // console.log(cnt, A)
                                return cnt
                            }
                            newMap[x][y] = 2
                        }
                    }
                }
            }
        }
        cnt++
        A = JSON.parse(JSON.stringify(newMap))
        // console.log(A)
    }
}
