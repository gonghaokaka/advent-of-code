import * as fs from 'fs'

const data: string[] = fs.readFileSync('Day1.txt', 'utf8').toString().split('\n')

const elfEnergys = []
let energy = 0
let highest = 0

for (let i = 0; i < data.length; i++) {
  if (data[i] != '') {
    energy += parseInt(data[i])
  } else {
    elfEnergys.push(energy)
    if (energy > highest) {
      highest = energy
    }
    energy = 0
  }
}
console.log(highest)

elfEnergys.sort((a, b) => {
  return b - a
})
console.log(elfEnergys[0] + elfEnergys[1] + elfEnergys[2])
