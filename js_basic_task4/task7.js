const arr = [2,3,4,6,7,4,3,1,2,4,78,9,1];
const minEl = Math.min(...arr);

let arrWithoutMin = arr.filter(el => el != minEl);

console.log(minEl, arrWithoutMin)