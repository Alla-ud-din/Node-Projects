let multiplication = 1;
export function mul (arr: number[]){
    for(let i=0; i<arr.length; i++){
        multiplication*=arr[i]
    }
    return multiplication;
}