const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function main(entry) {
  const n = parseInt(entry.trim(), 10)

  if (n < 2 && n > 20) return

  for (let i = 0; i < 10; i++) {
    console.log(`${n} x ${i+1} = ${n*(i+1)}`)
  }
}

rl.on('line', entry => {
  rl.close()
  main(entry)
})
