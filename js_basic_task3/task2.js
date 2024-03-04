// Створіть програму, яка приймає такі змінні: базовий рядок та символ,
// який потрібно замінити(як змінні), а потім замінює вказаний символ у базовому рядку на "*"
// та записує у новий рядок, який потім виводить у консоль.

let inputStr = 'this is  a string for our task but next$';
let symbol = 'i';
// let changesStrWithRepalace = inputStr.replace(new RegExp(symbol,"g"), '*');
// console.log(changesStrWithRepalace);
let changesStr = '';

for (let i = 0; i < inputStr.length; i = i + 1){
    if (inputStr[i] == symbol) {
        changesStr += '*';

    }
    else changesStr += inputStr[i];
};

console.log(changesStr);