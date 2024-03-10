import chalk from 'chalk';

// Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів.

const numbers = [5, -4, 0, 6, 7, -1, 0, 0];

let positiveNumbers = 0;
let negativeNumbers = 0;
let zeros = 0;

for (let i = 0; i < numbers.length; i++) {

     if(numbers[i] > 0) {
        positiveNumbers++;
     } else if(numbers[i] < 0){
        negativeNumbers++;
     } else if(numbers[i] == 0){
        zeros++;
     }
};

console.log(`Positive numbers :${chalk.bgBlue(positiveNumbers)}\nNegative numbers :${chalk.bgBlue(negativeNumbers)} \nZeros :${chalk.bgBlue(zeros)}`);