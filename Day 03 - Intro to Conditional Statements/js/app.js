const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function main(entry) {

  const N = parseInt(entry.trim(), 10)
  // Write your code here
  if (N % 2 && N > 0 && N < 100) {
    console.log('Weird')
  } else if (!(N % 2) && N >= 2 && N <= 5) {
      console.log('Not Weird')
  } else if (!(N % 2) && N >= 6 && N <= 20) {
      console.log('Weird')
  } else if (!(N % 2) && N > 20) {
      console.log('Not Weird')
  }
}

rl.on('line', entry => {
  rl.close()
  main(entry)
})