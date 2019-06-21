// Theatre Square

// JavaScript V8 4.8.0
const arr = readline()
    .split(' ')
    .map(s => parseInt(s))
n = arr[0]
m = arr[1]
a = arr[2]
const ans = Math.ceil(n / a) * Math.ceil(m / a)
print(ans)

// Node.js 6.9.1
// process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', chunk => {
    const [n, m, a] = chunk.split(' ').map(s => parseInt(s))
    const ans = Math.ceil(n / a) * Math.ceil(m / a)
    // console.log(ans)
    process.stdout.write(String(ans))
})
