import * as fs from 'fs';

const data = fs.readFileSync('q1.txt', 'utf8')
    .toString().split("\n").map((line) => +line)

const result = data.reduce((res, _, ix, array) => {
    return array[ix] > array[ix-1] ? res+1 : res
}, 0)
console.log(`AOC-2021-Q1P1:${result}`)

const result_2 = 
    data.reduce((res, _, ix, array) => {
        return array[ix+2] ? [...res, array[ix] + array[ix+1] + array[ix+2]] : res
    }, [])
    .reduce((res, _, ix, array) => {
        return array[ix] > array[ix-1] ? res+1 : res
    }, 0)
console.log(`AOC-2021-Q1P2:${result_2}`)