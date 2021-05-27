/* eslint-disable linebreak-style */
import chalk from 'chalk';

console.log(chalk.red.inverse('An error'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.red('Hello', `${chalk.underline.bgBlue('world')}!`));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

console.log(chalk.level);
console.log(chalk.blue.bold.inverse('inverse bold blue'));
