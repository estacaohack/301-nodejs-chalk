const chalk = require('chalk');		// importa a biblioteca chalk

console.log('Texto sem graça');
console.log(chalk.blue('Texto azul'));
console.log(chalk.green('Texto verde'));
console.log(chalk.bgCyan('Texto azul'));

console.log();		// pula uma linha

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

