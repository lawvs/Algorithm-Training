/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
    let score = 0
    tokens.sort((a, b) => a - b)
    while (tokens.length > 0) {
        if (P >= tokens[0]) {
            P -= tokens.shift()
            score++
            continue
        }
        if (
            tokens.length > 1 &&
            score >= 1 &&
            P + tokens[tokens.length - 1] >= tokens[0]
        ) {
            P += tokens.pop()
            score--
            continue
        }
        return score
    }
    return score
}

tokens = [100, 200, 300, 400]
P = 200
res = bagOfTokensScore(tokens, P)
console.log(res)
