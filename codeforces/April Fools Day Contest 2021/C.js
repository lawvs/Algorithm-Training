process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let inputArray = null
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin
})

process.stdin.on('end', (_) => {
  inputArray = inputString
    .trim()
    .split('\n')
    .map((s) => s.trim())

  main()
})

function readline() {
  return inputArray[currentLine++]
}

function main() {
  const s = readline()
  for (let i = 2; i < s.length; i++) {
    if (
      (s.charCodeAt(i - 2) -
        'A'.charCodeAt() +
        s.charCodeAt(i - 1) -
        'A'.charCodeAt()) %
        26 !==
      s.charCodeAt(i) - 'A'.charCodeAt()
    ) {
      console.log('NO')
      return
    }
  }
  console.log('YES')
}
