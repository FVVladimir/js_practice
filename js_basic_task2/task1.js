import chalk from "chalk";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
  }

let earnings = getRandomIntInclusive(0, 250000);
console.log(earnings);
let taxValue = 0;
let taxSum = 0;
let profit = 0;

if (earnings < 10000){

      taxValue = 0.05;
      taxSum = earnings * taxValue;
      taxSum.toFixed(2);
      profit = earnings - taxSum;     
}  else if(earnings > 10000 && earnings < 50000){      
  
  taxValue = 0.1;
  taxSum = earnings * taxValue;
  taxSum.toFixed(2);
  profit = earnings - taxSum;
}  else if(earnings > 50000 && earnings < 100000){      
  
  taxValue = 0.15;
  taxSum = earnings * taxValue;
  taxSum.toFixed(2);
  profit = earnings - taxSum;
}  else if(earnings > 100000 && earnings < 200000){      
  
  taxValue = 0.2;
  taxSum = earnings * taxValue;
  taxSum.toFixed(2);
  profit = earnings - taxSum;  
} else if(earnings > 200000){      
  
  taxValue = 0.25;
  taxSum = earnings * taxValue;
  taxSum.toFixed(2);
  profit = earnings - taxSum;  
}

console.log("this is earnings", chalk.underline.bold.bgBlue(earnings));
console.log("this is taxValue", chalk.underline.bold.bgGreen(taxValue));
console.log("this is taxSum", chalk.bgRed(taxSum));
console.log("this is profit", profit);