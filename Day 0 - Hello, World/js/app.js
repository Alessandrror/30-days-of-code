const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('', name => {
  readline.close()
  processData(name)
})

function processData(inputString) {
  // This line of code prints the first line of output
  console.log("Hello, World.")

  // Write the second line of output that prints the contents of 'inputString' here.

  console.log(inputString)
}