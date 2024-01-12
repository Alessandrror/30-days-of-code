const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function main(n) {
  let counter = 0
  let maxCount = 0

  while(n > 0) {
      n % 2 ? counter++ : counter = 0
      n = parseInt(n / 2)
      maxCount < counter && (maxCount = counter)
  }
  console.log(maxCount)
}

rl.on('line', entry => {
  rl.close()
  main(entry)
})
