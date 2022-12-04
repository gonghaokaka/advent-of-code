import * as fs from 'fs';

const data = fs.readFileSync("q2.txt", "utf8")
    .toString().split("\n")
    .map((line) => {
        let comm = line.split(" ")[0]
        let value = +line.split(" ")[1]
        return {"comm": comm, "value": value}
    })

const cord = data.reduce((res, instrunction) => {
    switch (instrunction.comm){
        case 'forward':
            res.x += instrunction.value
            break
        case 'down':
            res.y += instrunction.value
            break
        case 'up':
            res.y -= instrunction.value
            break
    }
    return res
}, {x:0, y:0})
console.log(`AOC-2021-Q2P1:${cord.x * cord.y}`)

const cord_2 = data.reduce((res, instrunction) => {
    switch (instrunction.comm){
        case 'forward':
            res.x += instrunction.value
            res.y += res.aim * instrunction.value
            break
        case 'down':
            res.aim += instrunction.value
            break
        case 'up':
            res.aim -= instrunction.value
            break
    }
    return res
}, {aim:0, x:0, y:0})
console.log(`AOC-2021-Q2P2:${cord_2.x * cord_2.y}`)