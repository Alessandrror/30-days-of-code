const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function main(entries) {
  const n = parseInt(entries[0].trim(), 10);

  const arr = entries[1].replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  console.log(arr.reverse().join(' '))
}

const entries = []
rl.on('line', entry => {
  entries.push(entry)
  if (entries.length === 2) {
    rl.close()
    main(entries)
  }
})