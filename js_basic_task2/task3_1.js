import chalk from "chalk";

let arr = [6,2,1,1,8,10,10];
let sum = 0;

let minArr = Math.min(...arr);
let maxArr = Math.max(...arr);

for(let i = 0; i < arr.length; i++){

    if(arr[i] !== minArr && arr[i] !== maxArr ){
        
        sum += arr[i];        
    };
};

console.log(chalk.bold.bgBlue(sum));