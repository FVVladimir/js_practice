// Створіть програму, яка приймає рядок від користувача (як змінну) та замінює всі голосні літери на "*"
// у цьому рядку. Виведіть отриманий рядок(із змінами) у консоль.

let inputStr = 'this is  a string for our task';
// let changesStrWithRepalace = inputStr.replace(/a|e|i|o|u|y/g, '*');
// console.log(changesStrWithRepalace);
let changesStr = '';

for (let i = 0; i < inputStr.length; i = i + 1){      
   if (inputStr[i] == 'i' || inputStr[i] == 'a' || inputStr[i] == 'e' || inputStr[i] == 'i' || inputStr[i] == 'o' || inputStr[i] == 'u' || inputStr[i] == 'y'){    
                        changesStr += '*';
                    //    console.log('+')         
  }
   else  changesStr += inputStr[i];
      // console.log(inputStr[i]);   
};

console.log(changesStr);