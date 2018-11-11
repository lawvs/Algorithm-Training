/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let a = []
    const b = []
    for (let i = 0; i < logs.length; i++) {
        const arr = logs[i].split(' ')
        if (/^[a-zA-Z]+$/.test(arr[1])) {
            a.push(logs[i])
        } else {
            b.push(logs[i])
        }
    }

    a = a.sort((x, y) => {
        const arr = x.split(' ')
        arr.shift()
        const strx = arr.join(' ')

        const arry = y.split(' ')
        arry.shift()
        const stry = arry.join(' ')
        return strx.localeCompare(stry)
    })
    return a.concat(b)
}

let logs
let ret
logs = ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo']
logs = [
    'q 1893219 538166 847',
    'etz 256211322 4 011',
    '5jo cfb thznt ouuf e',
    'ci apsxrohjpuj jqbc',
    '4l01 lffvrkmeznb wi',
    'c1wq ubghhryp mmsr m',
    'l 441680621620785765',
    'tka 347027603519160',
    'f1 2696043606002872',
    'j 07689868625 21 2 5',
    'd8e 090 6573 002817',
    '8djc1 xpzr d j xbky',
    'k6em nbeqvcy ubjm zn',
    '86m5l 6978487342 333',
    'k3y 32 383 8 501343',
    '8pgq kzjdyss fsh cl',
    'twiq fq pjaswaqikt o',
    'xrtx m ynrxcdmohk no',
    'vqggs wkvtvipq e sbm',
    'p18 tjgpnyzuwrunslx'
]
ret = reorderLogFiles(logs)
console.log(ret)
