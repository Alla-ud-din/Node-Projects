import chalk from "chalk";
let multiplication = 1;
export function mul (arr: number[]){
    console.log(chalk.red.bgYellow.underline.bold("\nMultiplication of ", arr , "is "));
    for(let i=0; i<arr.length; i++){
        multiplication*=arr[i]
    }
    return multiplication;
}