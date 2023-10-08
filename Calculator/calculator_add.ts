let sum = 0;
export function add (arr: number[]){
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum;
}