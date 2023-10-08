export function div(arr: number[]) {
    if (arr.length === 0) {
      throw new Error("Cannot divide by zero.");
    }
    
    let division = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === 0) {
        throw new Error("Cannot divide by zero.");
      }
      division /= arr[i];
    }
    return division;
  }
  