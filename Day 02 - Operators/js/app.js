const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function solve(entries) {

  const meal_cost = parseInt(entries[0], 10)
  const tip_percent = parseInt(entries[1], 10)
  const tax_percent = parseInt(entries[2], 10)

  // Write your code here
  const tip = (meal_cost/100)*(tip_percent)
  const tax = (tax_percent/100)*(meal_cost)
  const total_cost = meal_cost + tip + tax
  console.log(Math.round(total_cost))
  return Math.round(total_cost)
}

const entries = []

rl.on('line', entry => {
  entries.push(entry)
  if (entries.length === 3) return rl.close()
}).on('close', () => solve(entries))