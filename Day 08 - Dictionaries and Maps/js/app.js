const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function main(entries, n) {
  // Enter your code here
  const phoneBook= {}
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

const entries = []
let n = ''
rl.on('line', entry => {
  if (!entries.length) n = entry
  entries.push(entry)
  if (entries.length === ((parseInt(n)*2)+1)) {
    rl.close()
    main(entries, n)
  }
})