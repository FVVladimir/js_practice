// Створіть програму, яка приймає дві змінні(числа) і виводить список парних чисел, які знаходяться між ними.

let firstNum = 23;
let secondNum = 88;

let minNum = Math.min(firstNum, secondNum);
let maxNum = Math.max(firstNum, secondNum);

for (let i = minNum; i <= maxNum; i++){

    if(i % 2 == 0){

        console.log(i)
    };    
};