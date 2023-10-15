import chalk from "chalk";
let sum = 0;
export function add(arr) {
    console.log(chalk.red.bgYellow.underline.bold("\nAddition of ", arr, "is "));
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
