const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function main(entries) {

  const entry = entries
  const outputs = []
  const createOutputs = (str) => {
      const even = []
      const odd = []

      str.split('').forEach((s, i) => {
          i%2 ? odd.push(s) : even.push(s)
      })

      return outputs.push(`${even.join('')} ${odd.join('')}`)
  }
  entry.forEach(str => createOutputs(str))
  outputs.forEach(str => console.log(str))
}

const entries = []
rl.on('line', entry => {
  entries.push(entry)
  if (entries.length === 3) {
    rl.close()
    main(entries.splice(1))
  }
})