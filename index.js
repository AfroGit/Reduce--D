/*Given an array of scores from a test, find their sum. Scores = [7, 12, 9, 15, 8] */ 

// const scores = [7, 12, 9, 15, 8];

// let sum = scores.reduce((acc, curr) => {
//     return acc + curr;
// })

// console.log(sum)

// Output
// >> 51

//From the example above, no initial value is used.

// -----------------------------------------------------
/*Concatenate all elements in an array of strings to form one sentence. words = [“Studying”, “JavaScript”, “is”, “fun”, “and”, “interesting”]; */ 


// const words = ["Studying", "Javascript", "is", "fun", "and", "interesting."];
// const sentence = words.reduce((acc, current) => `${acc} ${current}`);
// console.log(sentence);

// Output
// Studying Javascript is fun and interesting.

// -------------------------------------------------


/*What is the maximum age from a group of footballer’s age. [31, 20, 28, 18, 22]. */ 


const ages = [31, 20, 28, 18, 22];
let maxAge = ages.reduce((acc, curr) => Math.min(acc, curr));
console.log(maxAge);

// Output
// >> 31