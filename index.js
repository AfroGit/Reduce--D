/*Given an array of scores from a test, find their sum. Scores = [7, 12, 9, 15, 8] */ 

const scores = [7, 12, 9, 15, 8];

let sum = scores.reduce((acc, curr) => {
    return acc + curr;
})

console.log(sum)

// Output
// >> 51

//From the example above, no initial value is used.