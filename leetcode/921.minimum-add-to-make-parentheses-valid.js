/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    while (true) {
        newS = S.replace(/\(\)/g, '')
        if (S === newS) {
            break
        }
        S = newS
    }
    console.log(S)
    return S.length
}

S = '())'
ret = minAddToMakeValid(S)
console.log(ret)

S = '((('
ret = minAddToMakeValid(S)
console.log(ret)

S = '()'
ret = minAddToMakeValid(S)
console.log(ret)

S = '()))(('
ret = minAddToMakeValid(S)
console.log(ret)

S = '())((((()((((((()()(()))(()())()()()))))()))()())'
ret = minAddToMakeValid(S)
console.log(ret)
