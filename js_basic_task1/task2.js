import chalk from "chalk";

const log = console.log;

let digit = 55;
let data = 'Holla';
let boo = true;

console.log(`
             typeNumber is ${chalk.bgRed(digit)}
             
             ${chalk.underline.bold('typeStryng is')} ${chalk.underline.bold(data)}
             
             typeBoolean is ${chalk.bgBlue(boo)}`);