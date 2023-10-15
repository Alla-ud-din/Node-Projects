import chalk from "chalk";
export function sub(arr) {
    console.log(chalk.red.bgYellow.underline.bold("\nSubtraction of ", arr, "is "));
    let substituion = arr[0];
    for (let i = 1; i < arr.length; i++) {
        substituion -= arr[i];
    }
    return substituion;
}
