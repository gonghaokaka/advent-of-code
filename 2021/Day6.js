import * as fs from 'fs';

const fishes = fs.readFileSync("./q6.txt", "utf8").toString().split(",").map((el) => +el)

function day6() {
    const buckets = new Array(9).fill(0); // create array for working in
    fishes.forEach(fish=>{ buckets[fish]++ }) // populate the buckets

    for(let i=0,l=256;i<l;i++) {
        const b = buckets.shift(); // remove the birthing lanternfish
        buckets.push(b) // append that many new fish as a new bucket
        buckets[6]+=b // increment the day 6 fish
    }

    const total = buckets.reduce((res, b) => {
        return res + b
    }, 0) 
    console.log(total)
}

day6()