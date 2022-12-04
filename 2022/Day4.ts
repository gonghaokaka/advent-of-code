import * as fs from 'fs'

const lines = fs.readFileSync('Day4.txt', 'utf8').toString().split('\n')

let count1 = 0
for (let i=0; i < lines.length ; i++){
    const pair = lines[i].split(",")
    const rangeOne = pair[0].split("-")
    const rangeTwo = pair[1].split("-")
    if (
        (parseInt(rangeOne[0])>= parseInt(rangeTwo[0]) && parseInt(rangeOne[1])<= parseInt(rangeTwo[1])) || 
        (parseInt(rangeTwo[0])>= parseInt(rangeOne[0]) && parseInt(rangeTwo[1])<= parseInt(rangeOne[1]))){
            count1+=1
    }
}
console.log(count1)

let count2 = 0
for (let i=0; i < lines.length ; i++){
    const pair = lines[i].split(",")
    const rangeOne = pair[0].split("-")
    const rangeTwo = pair[1].split("-")
    if (
        (parseInt(rangeOne[1]) >= parseInt(rangeTwo[0]) && parseInt(rangeOne[1]) <= parseInt(rangeTwo[1])) ||
        (parseInt(rangeTwo[1]) >= parseInt(rangeOne[0]) && parseInt(rangeTwo[1]) <= parseInt(rangeOne[1])) 
    ) {
        count2+=1
    }

}
console.log(count2)
