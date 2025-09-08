import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';
import dayjs from 'dayjs';

const { say, SQUIRREL } = cowsay;
const fullName = "Nurul Qalbi Zahrani ";
const studentID = "F1D022150";
const motivationalQuote = "“The only way to do great work is to love what you do. If you haven't found it yet, keep looking. {Steve Jobs}";
const now = dayjs().format('dddd, MMMM D, YYYY HH:mm:ss');

console.log(chalk.green.bold(fullName));
console.log(chalk.green.bold(studentID));
console.log(chalk.green.bold(motivationalQuote));
console.log(cowsay.say({ text: motivationalQuote, cow: SQUIRREL,
  eyes: '^^',
  tongue: 'U' }));
console.log(gradient.pastel(figlet.textSync("Nurul", { horizontalLayout: 'full' })));
console.log(gradient.pastel(figlet.textSync("Qalbi", { horizontalLayout: 'full' })));
console.log(gradient.pastel(figlet.textSync("Zahrani", { horizontalLayout: 'full' })));


const boxedInfo = boxen(
  `${chalk.yellow.bold('Name:')} ${fullName}\n${chalk.yellow.bold('NIM:')} ${studentID}`,
  {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'green',
    align: 'center'
  }
);
console.log(boxedInfo);
console.log(chalk.cyanBright(`Current Date & Time: ${now}`));

const args = process.argv.slice(2);
if (args.length > 0) {console.log(chalk.magentaBright(`\nHi ${args.join(' ')}, welcome to the Node.js plugin assignment demo!`));}
console.log("Hi! if you wanna try, please type your name with this prompt in your terminal: node index.js YOURNAME");
