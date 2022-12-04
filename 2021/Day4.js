import * as fs from 'fs';


const data = fs.readFileSync("./q4.txt", "utf8")
    .toString().split("\n")

const drawnNumbers = data[0].split(",").map((el) => +el)
const boards = data.splice(1)
    .reduce((res, curr) => {
        if (curr === "") {
            res.push([])
        } else { 
            res[res.length-1].push(...curr
                .split(" ")
                .filter((line) => !!line)
                .map((el) => +el))
        }
        return res
    }, [])

function crossDrawnNumber (input, num) {
    return input.map((board) => {
        return board.map((el) => {
            return el === num ? null : el
        })
    })
}

function generateRowArr(input){
    let idx = 0 
    let row_arr = []

    while (input.length > idx){
        row_arr.push(input.slice(idx, idx+5));
        idx += 5
    }
    return row_arr
}

function generateColumnArr(input){
    let col_arr = input.reduce((res, curr, idx) => {
        if (res[idx % 5] === undefined) {
            res.push([])
        }
        res[idx % 5].push(curr)
        return res
    }, [])
    return col_arr
}

function checkIfWin (input){
    let row_arr = generateRowArr(input)
    let col_arr = generateColumnArr(input)
    for (let ix of Array(5).keys()){
        if (row_arr[ix].filter((el) => el !== null).length === 0){
            return true
        }
        if (col_arr[ix].filter((el) => el !== null).length === 0){
            return true
        }
    }
    return false
}

function start (){
    let newBoards = boards
    for (let dn of drawnNumbers){
        newBoards = crossDrawnNumber(newBoards, dn)
        for (let nb of newBoards){
            if (checkIfWin(nb) === true) {
                return nb.reduce((res, c) => res + c, 0) * dn
            }
        }
    }
    return null
}
console.log(start())

function getWinningScore(input){
    let winner = input[input.length-1]
    return (
        winner.num * winner.board.reduce((res, curr) => res + curr, 0)
    )
}

function start2 (){
    let newBoards = boards
    let winningBoards = []
    let idx_to_remove = []
    for (let dn of drawnNumbers){
        newBoards = crossDrawnNumber(newBoards, dn)
        for (let nb of newBoards){
            if (checkIfWin(nb) === true) {
                winningBoards.push({"board":nb, "num": dn})
                idx_to_remove.push(newBoards.indexOf(nb));
            }
        }
        if (idx_to_remove.length > 0) {
            for (let idx of idx_to_remove){
                newBoards = newBoards.map((el, i) => {
                    return i != idx ? el : []
                })
            }
            idx_to_remove = []
        }
        newBoards = newBoards.filter((el) => el.length > 0)
        if (newBoards.length === 0){
            break
        }
    }
    return getWinningScore(winningBoards)
}
console.log(start2())