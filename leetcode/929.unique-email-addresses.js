/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const m = new Map()
    emails.map(s => {
        const [local, domain] = s.split('@')
        const [main, other] = local.split('+')
        const real = main.replace(/\./g, '') + '@' + domain
        m.set(real, 1)
    })
    return m.size
}

emails = [
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com'
]
ret = numUniqueEmails(emails)
console.log(ret)
