import * as fs from 'fs'

const commandlines = fs.readFileSync('Day10.txt', 'utf8').toString().split('\n')

let cycle = 0
let reg = 1
let part1 = 0


for (let i=0; i<commandlines.length; i++){
    const [command, val] = commandlines[i].split(' ')

    cycle ++
    //noop do nothing
    
    if (cycle % 40 == 20){
        part1 = part1 + (reg * cycle)
    }

    if (command == 'addx'){
        cycle ++
        
        if (cycle % 40 == 20){
            part1 = part1 + (reg * cycle)
        }
        reg += parseInt(val)
    }
}

console.log(part1)

 

let cycles = 0
reg = 1
let part2 = ""


const draw = () => {
    const postion = cycles % 40
    const sign = (Math.abs(postion - reg) <= 1) ? '#' : '.'
    part2 += sign

    cycles++ 
    if (cycles % 40 == 0){
        part2 += '\n'
    }
    
}

for (let i=0; i<commandlines.length; i++){
    const [command, val] = commandlines[i].split(' ')
    draw()
    if (command == 'addx'){
        draw() 
        reg += parseInt(val)
    }
}

console.log(part2)