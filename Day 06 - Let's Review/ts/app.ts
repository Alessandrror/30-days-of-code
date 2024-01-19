'use strict'

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function main(entries: string[]) {

  const entry = entries
  const outputs: string[] = []
  const createOutputs = (str: string) => {
      const even: string[] = []
      const odd: string[] = []

      str.split('').forEach((s, i) => {
          i%2 ? odd.push(s) : even.push(s)
      })

      return outputs.push(`${even.join('')} ${odd.join('')}`)
  }
  entry.forEach(str => createOutputs(str))
  outputs.forEach(str => console.log(str))
}

const entries: string[] = []
rl.on('line', (entry: string) => {
  entries.push(entry)
  if (entries.length === 3) {
    rl.close()
    main(entries.splice(1))
  }
})