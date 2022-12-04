import * as fs from 'fs';

const input = fs.readFileSync("./q11.txt", "utf8").toString().split("\n")

function refreshMatrix(inputs){
    let m = []
    for (let i=0; i < inputs.length; i+=1){
        const line = inputs[i].split("")
        for (let j=0; j < line.length; j+=1){
            const key = `${i}${j}`
            m.push({
                "energy" : +line[j], 
                "flashed": false,
                "postion": key
            })
        }
    }
    return m
}

let matrix = refreshMatrix(input)

function findNeighbors(location) {
    const locs= location.split("")
    const x = +locs[0]
    const y = +locs[1]
    const directions = [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1]
    ]
    
    const neighbours = directions.flatMap((loc) => {
        if (loc[0] < 0 || loc[0] > 9 || loc[1] < 0 || loc[1] > 9){
            return []
        }
        return [`${loc[0]}${loc[1]}`]
    })

    return matrix.flatMap((octp) => {
        if(neighbours.includes(octp.postion)){
            return [octp]
        }
        return []
    })
}

function findReadyToFlash(inputs) {
    return inputs.flatMap((el) => {
        if (el.energy > 9) {
            return [el]
        }
        return []
    })
} 

function increaseEnergy(inputs) {
    const inputPostions = inputs.map((el) => el.postion)
    return matrix.flatMap((el) => {
        if (inputPostions.includes(el.postion) && el.flashed === false){
            return [{   
                ...el,
                energy : el.energy + 1
            }]
        }
        return []
    })
}

function decreaseEnergy(octp) {
    console.log(octp)
    return matrix.flatMap((el) => {
        if (el.postion === octp.postion) {
            return [{
                ...el,
                "energy": 0,
                "flashed": true
            }]
        }
        return []
    })
}

function mergeToMatrix(inputs){
    const inputPostions = inputs.map((el) => el.postion)
    return matrix.map((el) => {
        if (inputPostions.includes(el.postion)){
            return inputs.find((item) => item.postion === el.postion)
        }
        return el
    })
}

function countFlash(inputs){
    return inputs.filter((el) => el.flashed === true).length
}

function resetFlashFlag(){
    return matrix.map((el) => {
        return {
            ...el, 
            "flashed": false
        }
    })
}

// eslint-disable-next-line max-statements
function runStep(){
    const increased = increaseEnergy(matrix)
    matrix = mergeToMatrix(increased)
    let toFlash = findReadyToFlash(matrix)
    
    while (toFlash.length > 0) {
        const octp = toFlash.shift()

        if (octp.flashed === false){
            const neighbours = increaseEnergy(findNeighbors(octp.postion))
            matrix = mergeToMatrix(neighbours)
        }
        const decreased = decreaseEnergy(octp)
        matrix = mergeToMatrix(decreased)
        toFlash = findReadyToFlash(matrix)
    }
    const flashed = countFlash(matrix)
    matrix = resetFlashFlag()
    return flashed
}

const part1 = [...Array(100).keys()].reduce((res, _) => {
    return res + runStep()
}, 0)

console.log(part1)

matrix = refreshMatrix(input)
let part2 = 0
let flashCount = 0

while (flashCount !== 100){
    flashCount = runStep()
    part2 += 1
    console.log(`Step:${part2}:${flashCount}`)
}

console.log(part2)