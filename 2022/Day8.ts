import * as fs from 'fs'

const lines = fs.readFileSync('Day8.txt', 'utf8').toString().split('\n')

const matrix = [];
const visable = []

for (let i=0; i < lines.length; i++) {
    matrix[i] = []
    visable[i] = []
    for (let j=0; j<lines[i].length; j++){
        matrix[i][j] = parseInt(lines[i][j])
        visable[i][j] = 0
    }
}


const seenBefore = (x, y) => {
    return visable[x][y] == 1
}

for (let i=0; i<matrix.length; i++){
    let prevHigh = -1
    // count from left to right
    for (let j=0; j<matrix[i].length; j++){
        if (matrix[i][j] > prevHigh){
            prevHigh = matrix[i][j]
            if (!seenBefore(i,j)){
                visable[i][j] = 1
            }
            continue
        }
    }

    prevHigh = -1
    // count from right to left
    for (let j=0; j<matrix[i].length; j++){
        const k = matrix[i].length - j -1

        if (matrix[i][k] > prevHigh){
            prevHigh = matrix[i][k]
            if (!seenBefore(i,k)){
                visable[i][k] = 1
            }
            continue
        }
    }
}

// i == column
for (let i=0; i < matrix[0].length; i++) {

    let prevHigh = -1
    // from top to bottom
    for (let j=0; j< matrix.length; j++){
        if (matrix[j][i] > prevHigh){
            prevHigh = matrix[j][i]
            if (!seenBefore(j, i)){
                visable[j][i] = 1
            }
        }
    }

    prevHigh = -1
    // from bottom to top
    for (let j=0; j< matrix.length; j++){
        const k = matrix.length - j -1
        if (matrix[k][i] > prevHigh){
            prevHigh = matrix[k][i]
            if (!seenBefore(k,i)){
                visable[k][i] = 1
            }
        }
    }
}

const part1 = visable.reduce((total, rows) => {
    return total + rows.reduce((count, cell) => {
        return count + cell
    },0)
}, 0)


let part2 = 0

for (let x =0; x<matrix.length; x++){
    for (let y=0; y<matrix[x].length; y++){
        const hight = matrix[x][y]
        let l = 0
        let r = 0
        let u = 0
        let d = 0
        //go left, count trees >= its hight
        for (let a=y-1; a>=0; a--){
            if (a < 0){
                break
            }
            l += 1
            if (matrix[x][a] >= hight) {
                break
            }
        }
        //go right, count trees >= its hight
        for (let a=y+1; a<matrix[x].length; a++){
            if (a > matrix[x].length) {
                break
            }
            r += 1
            if (matrix[x][a] >= hight){
                break
            }
        }
        //go up, count trees >= its hight
        for (let b=x-1; b>=0; b--) {
            if (b<0){
                break
            }
            u += 1
            if (matrix[b][y] >=hight){
                break
            }
        }
    
        //go bottom, count trees >= its hight
        for (let b=x+1; b<matrix.length; b++){
            if (b>matrix.length){
                break
            }
            d +=1
            if (matrix[b][y] >= hight){
                break
            }
        }
        if (l*r*u*d > part2){
            console.log(`total:${l*r*u*d}, matrix:[${x}][${y}], hight:${matrix[x][y]}`)
        }
        part2 = Math.max(l*r*u*d, part2)
    }
}

console.log(part2)
