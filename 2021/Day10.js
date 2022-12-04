import * as fs from 'fs';

    const input = fs.readFileSync("./q10.txt", "utf8").toString().split("\n")

    const mappings = {
        "(": ")",
        "<": ">",
        "[": "]",
        "{": "}"
    }

    const score = {
        ")" : 3,
        ">" : 25137,
        "]" : 57,
        "}" : 1197
    }

    const openings = ["(", "<", "[", "{"]
    let incompleteClosing = []
    

    const corruptedKeys = input.map((line) => {
        let corruptedIndex = null 
        let expecting = []
        for (let i=0; i < line.length; i+=1){
            if (openings.includes(line[i])) {
                expecting.push(mappings[line[i]])
            } else {
                if (line[i] === expecting[expecting.length - 1]) {
                    expecting.pop()
                }
                else {
                    return line[i]
                }
            }
        }
        if (corruptedIndex === null) {
            incompleteClosing.push(expecting.reverse())
        }

        return corruptedIndex
    })

    const part1 = corruptedKeys.reduce((res, curr) => { 
       return res + (curr === null ? 0 : score[curr])
    }, 0)

    console.log(part1)

    const part2Score = {
        ")" : 1,
        "]" : 2,
        "}" : 3,
        ">" : 4
    }

    const points = incompleteClosing.map((line) => {
        return line.reduce((res, curr) => {
            const newValue = res * 5 
            return newValue + part2Score[curr]
        }, 0)
    }).sort((a, b) => a - b)

    console.log(points[Math.floor(points.length/2)])