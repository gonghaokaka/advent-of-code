import * as fs from 'fs'

const line = fs.readFileSync('Day6.txt', 'utf8').toString()

// two pointer
// l = left
// r = right 
let l = 0
let count = 0
let seen = Array(26).fill(-1)

for (let r=0; r<line.length; r++){
    const charidx = line[r].charCodeAt(0) - 97

    if (seen[charidx] == -1){
        seen[charidx] = r
        count += 1
        
        if (count == 14) { // part1 = 4
            console.log(r + 1)
            break
        }

    }
    else {
        l = seen[charidx] + 1
        count = r - l + 1
        
        // recreate seen    
        seen = Array(26).fill(-1)
        for (let i=l; i < r+1; i++){
            seen[line[i].charCodeAt(0)-97] = i
        }
    }
}

