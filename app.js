/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import chalk from 'chalk';
import axios from 'axios';
import { Command } from 'commander/esm.mjs';

const commander = new Command();
// chalk demos

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

// commander demos

commander
  .option('-t, --type <type>', 'Lookup type')
  .option('-n, --number <number>', 'Number of results');
commander
  .parse(process.argv);

const args = commander.opts();

// axios demos

axios.get(`https://swapi.dev/api/${args.type}/${args.number}/`)
  .then((results) => {
    console.log(results.data);
  })
  .catch((error) => {
    console.log(chalk.red.inverse('An error retrieving data via axios'));
  });
