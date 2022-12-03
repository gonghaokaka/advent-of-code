"use strict";
exports.__esModule = true;
var fs = require("fs");
var lines = fs.readFileSync('Day3.txt', 'utf8').toString().split('\n');
for (var i = 0; i < lines.length; i++) {
    var mid = lines[i].length / 2;
    var first = lines[i].substring(0, mid);
    var second = lines[i].substring(mid);
    var seen = Array(58).fill(0);
    for (var j = 0; j < first.length; j++) {
        console.log(first[j].charCodeAt(0) - 56);
        seen[first[j].charCodeAt(0) - 56] = 1;
    }
}
