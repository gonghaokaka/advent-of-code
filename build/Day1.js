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
const data = fs.readFileSync('Day1.txt', 'utf8').toString().split('\n');
const elfEnergys = [];
let energy = 0;
let highest = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i] != '') {
        energy += parseInt(data[i]);
    }
    else {
        elfEnergys.push(energy);
        if (energy > highest) {
            highest = energy;
        }
        energy = 0;
    }
}
console.log(highest);
elfEnergys.sort((a, b) => {
    return b - a;
});
console.log(elfEnergys[0] + elfEnergys[1] + elfEnergys[2]);
