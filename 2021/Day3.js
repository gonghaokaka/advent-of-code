import * as fs from 'fs';


const data = fs.readFileSync("q3.txt", "utf8")
    .toString().split("\n")

function getBinary(input) {
    return input.reduce((res, curr) => {
        let arr_of_arr = []
        let arr = curr.split("")
        while (arr.length > 0){
            const chunk = arr.splice(0, 1);
            arr_of_arr.push(chunk)
        }
        const tmp = arr_of_arr.map((el, idx) => {
            if (res[idx] === undefined) {
                res.push([])
            }
            return [...res[idx], ...el]
        })
        return tmp
    }, [])
    .reduce((res, curr) => {
        let sum = curr.reduce((p, c) => +p + +c)
        let gamma = sum >= curr.length/2 ? 1 : 0
        let epsilon = sum < curr.length/2 ? 1 : 0
        return {
            "e": res.e + epsilon,
            "g": res.g + gamma
        }
    }, {"e":"", "g":""})
} 

console.log(`AOC-2021-Q3P1:${parseInt(getBinary(data).e, 2) * parseInt(getBinary(data).g, 2)}`)



function get_numbers(){
    var o2_remaining = data
    var co2_remaining = data
    for (let i=0; i < 12; i += 1){
        if (o2_remaining.length === 1 && co2_remaining.length === 1){
           break
        }
        if (o2_remaining.length > 1) {
            let binary = getBinary(o2_remaining)
            o2_remaining = o2_remaining.filter((el) => el[i] === binary.g[i])
        } 
        if (co2_remaining.length > 1) {
            let binary = getBinary(co2_remaining)
            co2_remaining = co2_remaining.filter((el) => el[i] === binary.e[i])
        }
    }
    return [o2_remaining[0], co2_remaining[0]]
}

console.log(`AOC-2021-Q3P2:${parseInt(get_numbers()[0], 2) * parseInt(get_numbers()[1], 2)}`)
