import * as fs from 'fs';

const postions = fs.readFileSync("./q7.txt", "utf8").toString().split(",").map((el) => +el)

const sortedPostions = postions.sort((a, b) => {
    return a - b
})
const smallest = sortedPostions[0]
const biggest = sortedPostions[sortedPostions.length-1]

var steps = []

for (let i=smallest; i <= biggest; i += 1){
    const tmp = sortedPostions.reduce((res, el) => {
        const s = Math.abs(el - i)
        return res + ((s + 1)*s)/2
    }, 0)
    steps.push(tmp)
}
console.log(steps.sort((a, b) => { 
    return a - b 
})[0])