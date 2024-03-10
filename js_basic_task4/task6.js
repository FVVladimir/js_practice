import chalk from "chalk";

// Є рядок email із ємейлом користувача
// За допомогою .split() розбийте його на дві частини по символу '@'. Запишіть вихідний масив у нову змінну.
// За допомогою .splice() треба замінити домен пошти(те що після @, тобто другий елемент масиву із індексом 1) на 'changed.com'.
// За допомогою .join() конвертуйте масив із зміненим ємейлом до рядка додав символ '@' між двома елементами масиву, виведіть цей рядок. 

let stringEmail = "daniel.abrams@gmail.com";

let splitString = stringEmail.split('@');
     splitString.splice(1,1, 'changed.com');
       let joinString = splitString.join('@');

console.log(chalk.bold.underline.bgGreen(joinString));