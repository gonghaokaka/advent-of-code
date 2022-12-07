import * as fs from 'fs'

const lines = fs.readFileSync('Day7.txt', 'utf8').toString().split('\n')

const sizes = {'/': 0}
const paths = []

const getCurrentPath = () => {
   return paths.join('/')
}

for (let i=0; i<lines.length; i++){
    const parts = lines[i].split(' ')
    if (parts[0] == '$'){
        if (parts[1] == 'ls'){
            continue
        }

        if (parts[1] == 'cd'){
            if (parts[2] != '..'){
                // when is cd x, mutate pathes
                paths.push(parts[2])
            }
            else {
                // when is cd .. remove the last
                paths.pop()
            }
        }
    }
    else if (parts[0] == 'dir') {
        // when is dir do nothing
        continue
    }
    else {
        // when is number add size with path\
        let travesPath = ''
        for (const path of paths){
            travesPath += path
            sizes[travesPath] = (sizes[travesPath] || 0) + parseInt(parts[0])
        }
    }
}

const bigdirs = (Object.entries(sizes).filter(([_, value]) => {
    return value <= 100000
}))

const part1 = bigdirs.reduce((res, el) =>{
    return res += el[1]
},0)

console.log(part1)

const needSpace = 30000000 - (70000000 - sizes['/'])
const orderedDirs = (Object.entries(sizes).sort((a, b) => {
    return a[1] - b[1]
}))

for (const el of orderedDirs){
    if (el[1] >= needSpace){
        console.log(el[1])
        break
    }
}
