#!/usr/bin/env node
import chalk from "chalk";
import showBanner from 'node-banner';
import inquirer from "inquirer";
import { add } from "./calculator_add.js";
import { sub } from "./calculator_sub.js";
import { mul } from "./calculator_mul.js";
import { div } from "./calculator_div.js";
(async () => {
    await showBanner('Calculator', 'Only type number or operations');
    async function main() {
        let values = [];
        for (let i = 0; i < 50; i++) {
            let response = await inquirer.prompt({
                name: `Values${i}`,
                type: "input",
                message: "Enter value or operation:"
            });
            let value = response[`Values${i}`];
            // console.log(typeof value);
            let numericValue = parseFloat(value);
            values.push(value);
            if (["+", "-", "*", "/"].includes(value)) {
                break;
            }
        }
        let operation = values.pop(); // The last value is the operation
        if (operation === "+") {
            console.log(chalk.green.bgMagentaBright("\nResult:"), chalk.yellow.bold.bgBlue(add(values.map(Number))));
        }
        else if (operation === "-") {
            console.log(chalk.green.bgMagentaBright("\nResult:"), chalk.yellow.bold.bgBlue(sub(values.map(Number))));
        }
        else if (operation === "*") {
            console.log(chalk.green.bgMagentaBright("\nResult:"), chalk.yellow.bold.bgBlue(mul(values.map(Number))));
        }
        else if (operation === "/") {
            console.log(chalk.green.bgMagentaBright("\nResult:"), chalk.yellow.bold.bgBlue(div(values.map(Number))));
        }
        else {
            console.log(chalk.red("Invalid operation"));
        }
        callback();
    }
    main();
    function callback() {
        main();
    }
})();
