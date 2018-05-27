/*
 * leetcode #843 guess-the-word 猜猜这个单词
 * https://leetcode-cn.com/contest/weekly-contest-86/problems/guess-the-word/
 */

/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */

const calcScore = function(w1, w2) {
    // console.assert(w1.length === w2.length)
    let score = 0
    for (let i = 0; i < w1.length; i++) {
        if (w1[i] === w2[i]) {
            score++
        }
    }
    return score
}

/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    for (let i = 0; i < 10; i++) {
        const rand = Math.floor(Math.random() * 10 ) % wordlist.length
        const word = wordlist[rand]
        const score = master.guess(word)

        // DEBUG
        // console.log('word', word, score)
        // console.log('wordlist.length', wordlist.length)
        // if (wordlist.length < 10) {
        //     console.log('wordlist', wordlist)
        // }
        // DEBUG END

        if (score === 6) {
            return
        }
        wordlist = wordlist.filter(w => {
            return w !== word && calcScore(word, w) === score
        })
    }
};

// const secret = "vftnkr"
// const wordlist = ["mjpsce","giwiyk","slbnia","pullbr","ezvczd","dwkrmt","qgzebh","wvhhlm","kqbmny","zpvrkz","pdwxvy","gilywa","gmrrdc","vvqvla","rmjirt","qmvykq","mhbmuq","unplzn","qkcied","eignxg","fbfgng","xpizga","twubzr","nnfaxr","skknhe","twautl","nglrst","mibyks","qrbmpx","ukgjkq","mhxxfb","deggal","bwpvsp","uirtak","tqkzfk","hfzawa","jahjgn","mteyut","jzbqbv","ttddtf","auuwgn","untihn","gbhnog","zowaol","feitjl","omtiur","kwdsgx","tggcqq","qachdn","dixtat","hcsvbw","chduyy","gpdtft","bjxzky","uvvvko","jzcpiv","gtyjau","unsmok","vfcmhc","hvxnut","orlwku","ejllrv","jbrskt","xnxxdi","rfreiv","njbvwj","pkydxy","jksiwj","iaembk","pyqdip","exkykx","uxgecc","khzqgy","dehkbu","ahplng","jomiik","nmcsfe","bclcbp","xfiefi","soiwde","tcjkjp","wervlz","dcthgv","hwwghe","hdlkll","dpzoxb","mpiviy","cprcwo","molttv","dwjtdp","qiilsr","dbnaxs","dbozaw","webcyp","vftnkr","iurlzf","giqcfc","pcghoi","zupyzn","xckegy"]
// const count = 10
