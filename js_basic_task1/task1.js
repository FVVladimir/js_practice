import chalk from 'chalk';

const log = console.log;

log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));