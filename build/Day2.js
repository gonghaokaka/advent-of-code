"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const lines = fs.readFileSync('Day2.txt', 'utf8').toString().split('\n');
let totalScore = 0;
const lose = 0;
const draw = 3;
const win = 6;
// X rock, Y papper Z Scissors
const shapeScore = { X: 1, Y: 2, Z: 3 };
for (let i = 0; i < lines.length; i++) {
    const guide = lines[i].split(' ');
    let score = shapeScore[guide[1]];
    if (guide[0] == 'A') {
        //rock
        if (guide[1] == 'X') {
            score += draw;
        }
        else if (guide[1] == 'Y') {
            score += win;
        }
        else {
            score += lose;
        }
    }
    else if (guide[0] == 'B') {
        //paper
        if (guide[1] == 'X') {
            score += lose;
        }
        else if (guide[1] == 'Y') {
            score += draw;
        }
        else {
            score += win;
        }
    }
    else {
        if (guide[1] == 'X') {
            score += win;
        }
        else if (guide[1] == 'Y') {
            score += lose;
        }
        else {
            score += draw;
        }
    }
    totalScore += score;
}
console.log(totalScore);
const resultScore = { X: 0, Y: 3, Z: 6 };
// A rock, B papper C Scissors
const shapeScore2 = {
    A: 1,
    B: 2,
    C: 3,
};
let totalScore2 = 0;
for (let i = 0; i < lines.length; i++) {
    const guide = lines[i].split(' ');
    let score2 = resultScore[guide[1]];
    if (guide[0] == 'A') {
        //rock
        if (guide[1] == 'X') {
            //lose
            score2 += shapeScore2['C'];
        }
        else if (guide[1] == 'Y') {
            //draw
            score2 += shapeScore2['A'];
        }
        else {
            score2 += shapeScore2['B']; //win
        }
    }
    else if (guide[0] == 'B') {
        //paper
        if (guide[1] == 'X') {
            //lose
            score2 += shapeScore2['A'];
        }
        else if (guide[1] == 'Y') {
            //draw
            score2 += shapeScore2['B'];
        }
        else {
            score2 += shapeScore2['C'];
        }
    }
    else {
        //Scissors
        if (guide[1] == 'X') {
            score2 += shapeScore2['B'];
        }
        else if (guide[1] == 'Y') {
            score2 += shapeScore2['C'];
        }
        else {
            score2 += shapeScore2['A'];
        }
    }
    totalScore2 += score2;
}
console.log(totalScore2);
