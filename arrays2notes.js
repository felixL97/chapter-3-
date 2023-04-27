
//Arrays are 'pass-by-reference'

//This means you can change an array

//unknowingly if you change another that

//was equal to it

let nums = [5, 4, 3, 2, 1]

let newNums = nums

newNums[0] = 12

console.log('nums: ' + nums)

console.log('newNums: ' + newNums)


let vals = [5, 4, 3, 2, 1]

let newVals = []

for (let i=0; i<vals.length; i++){

    newVals.push(vals[i]);

}

newVals[0]=12

console.log('vals: ' + vals)

console.log('newVals: ' + newVals)