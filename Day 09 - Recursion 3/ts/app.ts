const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function factorial(n: number): number {
  // Write your code here
  return n > 1 ? n * factorial(n - 1) : n
}

function main(entry: string) {
  // Enter your code here
  const n = parseInt(entry.trim(), 10)
  const result = factorial(n)
  console.log(result)
}

rl.on('line', (entry: string) => {
  rl.close()
  main(entry)
})
