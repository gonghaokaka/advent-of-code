import * as fs from 'fs';


const data = fs.readFileSync("./q5.txt", "utf8")
    .toString().split("\n")

const tmp1 = data
    .reduce((res, line) => {
        let [first, second] = line.split(" -> ")
        let [x1, y1] = first.split(",")
        let [x2, y2] = second.split(",")
        if (x1 === x2) {
            const tmp = {"x": [x1], "y": [+y1, +y2]}
            return [...res, tmp]
        } else if (y1 === y2) {
            const tmp = {"x": [+x1, +x2], "y": [y1]}
            return [...res, tmp]
        }
        return res
    }, [])
    .reduce((res, line) => {
        let cords = []
        const stable_cor = line.x.length === 1 ? line.x[0] : line.y[0]
        const moving_cors = line.x.length === 1 ? line.y : line.x

        const min = Math.min(moving_cors[0], moving_cors[1])
        const max = Math.max(moving_cors[0], moving_cors[1])
        for (let n=min; n<=max; n+=1){
            if (line.x.length !== 1 === true){
                cords.push(`${n},${stable_cor}`)
            } else {
                cords.push(`${stable_cor},${n}`)
            }
        }
        return [...res, ...cords]
    }, [])

function sum(input) {
    const summary = input
        .reduce((res, curr) => {
            if (curr in res) { 
            res[curr] += 1
            } else {
                res[curr] = 1
            }
            return res
        }, {})

    return Object.keys(summary).reduce((res, key) =>{
        if (summary[key] > 1){
            return res += 1
        }
        return res
    }, 0)
}


console.log(sum(tmp1))

const tmp2 = data
    .reduce((res, line) => {
        let [first, second] = line.split(" -> ")
        let [x1, y1] = first.split(",")
        let [x2, y2] = second.split(",")
        if (Math.abs(x1-x2) === Math.abs(y1-y2)) {
            const tmp = {"x": [+x1, +y1], "y": [+x2, +y2]}
            return [...res, tmp]
        }
        return res
    }, [])
    .reduce((res, line) => {
        let cords = []
        const diff = Math.abs(line.x[0] - line.y[0])
        let inital_cord = null
        let target_cord = null
        if (line.x[0] < line.y[0]){
            inital_cord = line.x 
            target_cord = line.y
        } else {
            inital_cord = line.y 
            target_cord = line.x
        } 
        for (let i=0; i<=diff; i+=1){
            let x = null
            let y = null
            x = inital_cord[0] < target_cord[0] ?  x += i : x -= i
            y = inital_cord[1] < target_cord[1] ?  y += i : y -= i
            cords.push(`${inital_cord[0] + x},${inital_cord[1] + y}`)
        }
        return [...res, ...cords]
    }, [])

console.log(sum([...tmp1, ...tmp2]))