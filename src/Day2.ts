import * as fs from 'fs'

const lines = fs.readFileSync('Day2.txt', 'utf8').toString().split('\n')

let totalScore = 0
const lose = 0
const draw = 3
const win = 6
// X rock, Y papper Z Scissors
const shapeScore = { X: 1, Y: 2, Z: 3 }

for (let i = 0; i < lines.length; i++) {
  const guide = lines[i].split(' ')
  let score = shapeScore[guide[1]]
  if (guide[0] == 'A') {
    //rock
    if (guide[1] == 'X') {
      score += draw
    } else if (guide[1] == 'Y') {
      score += win
    } else {
      score += lose
    }
  } else if (guide[0] == 'B') {
    //paper
    if (guide[1] == 'X') {
      score += lose
    } else if (guide[1] == 'Y') {
      score += draw
    } else {
      score += win
    }
  } else {
    if (guide[1] == 'X') {
      score += win
    } else if (guide[1] == 'Y') {
      score += lose
    } else {
      score += draw
    }
  }
  totalScore += score
}

console.log(totalScore)

const resultScore = { X: 0, Y: 3, Z: 6 }
// A rock, B papper C Scissors

const shapeScore2 = {
  A: 1,
  B: 2,
  C: 3,
}

let totalScore2 = 0
for (let i = 0; i < lines.length; i++) {
  const guide = lines[i].split(' ')
  let score2 = resultScore[guide[1]]
  if (guide[0] == 'A') {
    //rock
    if (guide[1] == 'X') {
      //lose
      score2 += shapeScore2['C']
    } else if (guide[1] == 'Y') {
      //draw
      score2 += shapeScore2['A']
    } else {
      score2 += shapeScore2['B'] //win
    }
  } else if (guide[0] == 'B') {
    //paper
    if (guide[1] == 'X') {
      //lose
      score2 += shapeScore2['A']
    } else if (guide[1] == 'Y') {
      //draw
      score2 += shapeScore2['B']
    } else {
      score2 += shapeScore2['C']
    }
  } else {
    //Scissors
    if (guide[1] == 'X') {
      score2 += shapeScore2['B']
    } else if (guide[1] == 'Y') {
      score2 += shapeScore2['C']
    } else {
      score2 += shapeScore2['A']
    }
  }
  totalScore2 += score2
}

console.log(totalScore2)
