const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

interface phoneBookInterface {
  [key: string]: string
}

function main(entries: string[], n: string) {
  // Enter your code here
  const phoneBook: phoneBookInterface = {}
  const inputs = entries
  const num = parseInt(n)
  const keys = inputs.slice(num+1)

  for(let i = 1; i <= num; i++) {
    const [key, value] = inputs[i].split(' ')
    phoneBook[key] = value
  }

  keys.forEach(key => {
    if(!phoneBook.hasOwnProperty(key)) {
      console.log('Not found')
    } else console.log(`${key}=${phoneBook[key]}`)
  })
}

const entries: string[] = []
let n = ''
rl.on('line', (entry: string) => {
  if (!entries.length) n = entry
  entries.push(entry)
  if (entries.length === ((parseInt(n)*2)+1)) {
    rl.close()
    main(entries, n)
  }
})