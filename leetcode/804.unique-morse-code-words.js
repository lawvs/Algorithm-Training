/*
 * leetcode #804 unique-morse-code-words 唯一摩尔斯密码词
 * https://leetcode-cn.com/problems/unique-morse-code-words/description/
 */

/**
 * @param {string[]} words
 * @return {number}
 */

const table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

function translate(word) {
    let res = ""
    for(let w = 0; w < word.length; w++) {
        res += table[word[w].charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    return res
}

var uniqueMorseRepresentations = function(words) {
    const m = new Map()
    for(index in words) {
        m.set(translate(words[index]), 1)
    }
    return m.size
};
