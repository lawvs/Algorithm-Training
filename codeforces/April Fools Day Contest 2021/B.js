process.stdin.resume()
process.stdin.setEncoding('utf-8')

process.stdin.on('data', (/** @type {string} */ s) => {
  console.log(+s % 9 === 0 ? 9 : +s % 9)
})
