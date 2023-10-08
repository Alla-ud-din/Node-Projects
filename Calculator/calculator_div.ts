import chalk from "chalk";
export function div(arr: number[]) {
  console.log(chalk.red.bgYellow.underline.bold("\nDivision of ", arr , "is "))
    let division = arr[0];
    for (let i = 1; i < arr.length; i++) {
      try{
      if (arr[i] === 0) {
        throw new Error("Cannot divide by zero.");
      }}catch(error: any){
        console.log(error.message)
      }
      division /= arr[i];
    }
    return division;
  }
  