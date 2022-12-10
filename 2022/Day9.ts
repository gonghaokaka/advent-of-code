import * as fs from 'fs'

const commands = fs.readFileSync('Day9.txt', 'utf8').toString().split('\n')
let head = [0,0]
let tail = [0,0]
const tailbeen = new Set(['0,0'])


const move = (command: string, postion: number[]) : number[] => {
    if (command == 'R'){
        postion = [postion[0], postion[1]+1]
    }
    else if (command == 'L'){
        postion = [postion[0], postion[1]-1]
    }
    else if (command == 'U'){
        postion = [postion[0]+1, postion[1]]
    }
    else if (command == 'D'){
        postion = [postion[0]-1, postion[1]]
    }
    return postion
} 


for (let i=0; i < commands.length; i++){
    const [dir, steps] = commands[i].split(" ")
    for(let j=0; j<parseInt(steps); j++){
        // move head
        head = move(dir, head)

        const yDis = Math.abs(head[1] - tail[1])
        const xDis = Math.abs(head[0] - tail[0])
    
        if (yDis >= 2){
            // left or right
            const leftOrRight = Math.sign(head[1]-tail[1]) > 0 ? 'R' : 'L'
            tail = move(leftOrRight, tail)
            if (xDis != 0) {
                // up or down
                const upOrDown = Math.sign(head[0]-tail[0]) > 0 ? 'U' : 'D'
                tail = move(upOrDown, tail)
            }
        }
        else if (xDis >=2){
            // up or down
            const upOrDown = Math.sign(head[0]-tail[0]) > 0 ? 'U' : 'D'
            tail = move(upOrDown, tail)
            if (yDis != 0) {
                // left or right
                const leftOrRight = Math.sign(head[1]-tail[1]) > 0 ? 'R' : 'L'
                tail = move(leftOrRight, tail)
            }
        }
        tailbeen.add(`${tail[0]},${tail[1]}`)
    }
}

console.log(tailbeen.size)

head = [0,0]
tail = [0,0]
const whole = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
const tailbeen2 = new Set(['0,0'])


for (let j=0; j < commands.length; j++){
    const [dir, steps] = commands[j].split(" ")
    for (let step = 0; step < parseInt(steps); step++) {
        // move head first
        whole[0] = move(dir, whole[0])

        // all tails
        for (let i = 1; i < whole.length; i++) {
            const yDis = Math.abs(whole[i-1][1] - whole[i][1])
            const xDis = Math.abs(whole[i-1][0] - whole[i][0])
        
            if (yDis >= 2){
                // left or right
                const leftOrRight = Math.sign(whole[i-1][1]-whole[i][1]) > 0 ? 'R' : 'L'
                whole[i] = move(leftOrRight, whole[i])
                if (xDis != 0) {
                    // up or down
                    const upOrDown = Math.sign(whole[i-1][0]-whole[i][0]) > 0 ? 'U' : 'D'
                    whole[i] = move(upOrDown, whole[i])
                }
            }
            else if (xDis >=2){
                // up or down
                const upOrDown = Math.sign(whole[i-1][0]-whole[i][0]) > 0 ? 'U' : 'D'
                whole[i] = move(upOrDown, whole[i])
                if (yDis != 0) {
                    // left or right
                    const leftOrRight = Math.sign(whole[i-1][1]-whole[i][1]) > 0 ? 'R' : 'L'
                    whole[i] = move(leftOrRight, whole[i])
                }
            }
        }   
        //record tail movement
        tailbeen2.add(`${whole[whole.length - 1][0]},${whole[whole.length - 1][1]}`);     
    }
}


console.log(tailbeen2.size)