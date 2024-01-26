const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function main(n: number) {
  let counter = 0
  let maxCount = 0

  while(n > 0) {
      n % 2 ? counter++ : counter = 0
      const rem = n / 2
      n = parseInt(rem.toString())
      maxCount < counter && (maxCount = counter)
  }
  console.log(maxCount)
}

rl.on('line', (entry: string) => {
  rl.close()
  main(parseInt(entry))
})
