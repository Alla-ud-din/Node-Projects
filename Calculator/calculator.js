import chalk from "chalk";
import showBanner from 'node-banner';
import inquirer from "inquirer";
import { add } from "./calculator_add.js";
import { sub } from "./calculator_sub.js";
import { mul } from "./calculator_mul.js";
import { div } from "./calculator_div.js";
(async () => {
    await showBanner('Calculator', 'Only type number or operations');
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
    console.log(values);
    if (operation === "+") {
        console.log(chalk.green("Result:"), chalk.bold(add(values.map(Number))));
    }
    else if (operation === "-") {
        console.log(chalk.green("Result:"), chalk.bold(sub(values.map(Number))));
    }
    else if (operation === "*") {
        console.log(chalk.green("Result:"), chalk.bold(mul(values.map(Number))));
    }
    else if (operation === "/") {
        console.log(chalk.green("Result:"), chalk.bold(div(values.map(Number))));
    }
    else {
        console.log(chalk.red("Invalid operation"));
    }
})();
