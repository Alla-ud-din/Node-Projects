export function sub (arr: number[]){
    let substituion = arr[0];
    for(let i=1; i<arr.length; i++){
        substituion-=arr[i];
    }
    return substituion;
}