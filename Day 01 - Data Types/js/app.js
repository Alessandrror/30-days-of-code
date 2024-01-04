const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function processData(entries) {
  const i = 4
  const d = 4.0
  const s = "Some word "
  // This line of code prints the first line of output
  // Declare second integer, double, and String variables.
  const i2 = entries[0]
  const d2 = entries[1]
  const s2 = entries[2]
  // Read and save an integer, double, and String to your variables.
  // Print the sum of both integer variables on a new line.
  console.log(parseInt(i)+parseInt(i2))
  // Print the sum of the double variables on a new line.
  console.log((parseFloat(d)+parseFloat(d2)).toFixed(1))
  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log((s).toString()+(s2).toString())
}

const entries = []

rl.on('line', entry => {
  entries.push(entry)
  if (entries.length === 3) return rl.close()
}).on('close', () => processData(entries))