const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function processData(inputString) {
  // This line of code prints the first line of output
  console.log("Hello, World.")

  // Write the second line of output that prints the contents of 'inputString' here.

  console.log(inputString)
}

rl.on('line', name => {
  rl.close()
  processData(name)
})