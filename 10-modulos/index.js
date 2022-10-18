import { suma,multiplicar } from "../10-modulos/controller.js";

suma (2,2);
console.log(multiplicar(suma(1,2),suma(4,5)));

import chalk from 'chalk';
console.log(chalk.green(multiplicar(suma(1,2),suma(4,5))));