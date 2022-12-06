
import * as fs from 'fs'

const lines = fs.readFileSync('Day5.txt', 'utf8').toString().split('\n')

const ogcrates = [ 
    ["D", "T", "R", "B", "J", "L", "W", "G"],
    ["S", "W", "C"],
    ["R", "Z", "T", "M"],
    ["D","T","C","H","S","P","V"],
    ["G","P","T","L","D","Z"],
    ["F","B","R","Z","J","Q","C","D"],
    ["S","B","D","J","M","F","T","R"],
    ["L","H","R","B","T","V","M"],
    ["Q","P","D","S","V"],
]


const crates = [ 
    ["D", "T", "R", "B", "J", "L", "W", "G"],
    ["S", "W", "C"],
    ["R", "Z", "T", "M"],
    ["D","T","C","H","S","P","V"],
    ["G","P","T","L","D","Z"],
    ["F","B","R","Z","J","Q","C","D"],
    ["S","B","D","J","M","F","T","R"],
    ["L","H","R","B","T","V","M"],
    ["Q","P","D","S","V"],
]

for (let i=0; i<lines.length; i++){

    const regex = /(\w+)/g
    const matches = lines[i].match(regex) || [];
    
    const targetIdx = parseInt(matches[5]) - 1 
    const sourceIdx = parseInt(matches[3]) - 1
    const amount = parseInt(matches[1])

    for (let j=0; j< amount; j++){
        crates[targetIdx].push(crates[sourceIdx].pop())
    }
}

const res1 = crates.reduce((chars, c) => chars += c[c.length-1],"")
console.log(res1)

for (let i=0; i<lines.length; i++){

    const regex = /(\w+)/g
    const matches = lines[i].match(regex) || [];
    
    const targetIdx = parseInt(matches[5]) - 1 
    const sourceIdx = parseInt(matches[3]) - 1
    const amount = parseInt(matches[1])

    const moved = []
    for (let j=0; j< amount; j++){
        moved.unshift(ogcrates[sourceIdx].pop())
    }
    ogcrates[targetIdx] = [...ogcrates[targetIdx], ...moved]
}

const res2 = ogcrates.reduce((chars, c) => chars += c[c.length-1],"")
console.log(res2)