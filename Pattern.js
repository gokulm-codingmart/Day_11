const readline = require(  `readline-sync`)
let arr = [6,1,3,2,4,7]
let profit;
let sum = [];
let result = 0;
let k = readline.question("Enter no of transactions");
//prev < curr
for(let i=1;i<arr.length;i++){
    if(!arr[i-1]>=arr[i] && i<arr.length)
    {
        i++;
    }
    // else if(arr[i-1]==arr[i]){
    //     sum.push(1)
    // }
    else{
        let prev = arr[i-1];
        let curr = arr[i];
        // console.log(curr);
        sum.push(curr - prev)
    }
    
}
x = sum.sort((a,b)=> b-a)
for(let i=0;i<k;i++){
    if(x[i]>0){
    result += x[i]
    }
}
console.log(result);
console.log(sum)
console.log(x);
