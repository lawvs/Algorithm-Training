
function isEmail(S) {
    if (S.length < 8) {
        return false
    }
    reg = /[a-zA-Z]*@[a-zA-Z]*\.[a-zA-Z]/
    if (!reg.test(S)) {
        return false
    }
    return true
}

/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
    if (isEmail(S)) {
        S = S.toLowerCase();
        sp = S.split('@')
        name1 = sp[0]
        email = `${name1[0]}*****${name1[name1.length - 1]}@${sp[1]}`
        return email
    }
    S = S.replace(/[^0-9]/g, '')
    len = S.length
    // no country code
    if (len === 10) {
        num = `***-***-${S[len-4]}${S[len-3]}${S[len-2]}${S[len-1]}`
        return num
    }
    country = len - 10
    code = S.substring(0, country).replace(/./g, '*')
    num = `+${code}-***-***-${S[len-4]}${S[len-3]}${S[len-2]}${S[len-1]}`
    return num
};
