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
const lines = fs.readFileSync('Day3.txt', 'utf8').toString().split('\n');
let points = 0;
const point = [];
for (let i = 0; i < lines.length; i++) {
    const mid = lines[i].length / 2;
    const seen = Array(58).fill(0);
    for (let j = 0; j < lines[i].length; j++) {
        if (j < mid) {
            // console.log(lines[i][j].charCodeAt(0) - 65)
            seen[lines[i][j].charCodeAt(0) - 65] = 1;
        }
        else {
            if (seen[lines[i][j].charCodeAt(0) - 65] == 1) {
                // found and calucate point
                if (lines[i][j].charCodeAt(0) - 65 < 26) {
                    points += lines[i][j].charCodeAt(0) - 65 + 27;
                    point.push(lines[i][j].charCodeAt(0) - 65 + 27);
                }
                else {
                    points += lines[i][j].charCodeAt(0) - 65 - 31;
                    point.push(lines[i][j].charCodeAt(0) - 65 - 31);
                }
                break;
            }
        }
    }
}
console.log(point);
console.log(points);
let points2 = 0;
const point2 = [];
for (let i = 0; i < lines.length; i += 3) {
    const seen = Array(58).fill(0);
    console.log(lines[i]);
    for (let x = 0; x < lines[i].length; x++) {
        if (seen[lines[i][x].charCodeAt(0) - 65] == 0) {
            seen[lines[i][x].charCodeAt(0) - 65] += 1;
        }
    }
    console.log(lines[i + 1]);
    for (let y = 0; y < lines[i + 1].length; y++) {
        if (seen[lines[i + 1][y].charCodeAt(0) - 65] == 1) {
            seen[lines[i + 1][y].charCodeAt(0) - 65] += 1;
        }
    }
    console.log(lines[i + 2]);
    for (let z = 0; z < lines[i + 2].length; z++) {
        if (seen[lines[i + 2][z].charCodeAt(0) - 65] == 2) {
            // found and calucate point
            if (lines[i + 2][z].charCodeAt(0) - 65 < 26) {
                points2 += lines[i + 2][z].charCodeAt(0) - 65 + 27;
                point2.push(lines[i + 2][z].charCodeAt(0) - 65 + 27);
            }
            else {
                points2 += lines[i + 2][z].charCodeAt(0) - 65 - 31;
                point2.push(lines[i + 2][z].charCodeAt(0) - 65 - 31);
            }
            break;
        }
    }
}
console.log(point2);
console.log(points2);
