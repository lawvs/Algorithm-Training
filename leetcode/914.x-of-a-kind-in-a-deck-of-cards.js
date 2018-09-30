#!/usr/bin/env node
/**
 * leetcode #914 x-of-a-kind-in-a-deck-of-cards 卡牌分组
 * https://leetcode-cn.com/contest/weekly-contest-104/problems/x-of-a-kind-in-a-deck-of-cards/
 */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length <= 1) return false
    deck.sort((a, b) => a - b)
    for (let i = 2; i <= deck.length; i++) {
        if (deck.length % i !== 0) {
            continue
        }
        let flag = true
        let tar = deck[0]
        let cnt = 1
        let j = 1
        while (j < deck.length) {
            if (cnt === i) {
                cnt = 0
                tar = deck[j]
            }
            if (deck[j] !== tar) {
                flag = false
                break
            }
            j++
            cnt++
        }
        if (flag) {
            // console.log(i)
            return true
        }
    }
    return false
}
