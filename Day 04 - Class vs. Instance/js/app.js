const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

// As a function

// function Person(initialAge){
//         if (initialAge < 0) {
//             console.log('Age is not valid, setting age to 0.')
//             this.age = 0
//         } else {
//             this.age = initialAge
//         }
//     this.amIOld=function(){
//         if (this.age < 13) {
//             console.log('You are young.')
//         } else if (this.age >= 13 && this.age < 18) {
//             console.log('You are a teenager.')
//         } else {
//             console.log('You are old.')
//         }
//     }
//     this.yearPasses=function(){
//         this.age++
//     }
// }

// As a class
class Person {
  age;
  constructor(initialAge) {
      if(initialAge < 0) {
          console.log('Age is not valid, setting age to 0.')
          this.age = 0
      } else {
          this.age = initialAge
      }
  }
  amIOld() {
      if (this.age < 13) console.log('You are young.')
      else if (this.age >= 13 && this.age < 18) console.log('You are a teenager.')
      else console.log('You are old.')
  }
  yearPasses() {
      this.age++
  }
}

function main(entries) {

  const T = parseInt(entries[0])
  const ages = entries.splice(1)
  for(let i = 0; i < T; i++){
    const age = parseInt(ages[i])
    const p = new Person(age)
    p.amIOld()
    for(let j = 0; j < 3; j++){
        p.yearPasses()
    }
    p.amIOld()
    console.log("")
  }
}

const entries = []
rl.on('line', entry => {
  entries.push(entry)
  if (entries.length === 5) {
    rl.close()
    main(entries)
  }
})