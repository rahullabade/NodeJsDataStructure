const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter the  number ", function (number) {
    let Number_For_Prime = parseInt(number);

let DivisorArr = new Array();
let PrimeDivisorArr = new Array();
let isPrime = true;
for(let i=0;i<Number_For_Prime ;i++){
    if(Number_For_Prime %i==0){
        DivisorArr.push(i);
        for(let j=2;j<i;j++){
            if(i%j == 0){
                isPrime = false
                break;
            }
        }
        if(isPrime){
            PrimeDivisorArr.push(i);
        }
    }
}
console.log("Divisor "+DivisorArr);

console.log("Prime divisor "+ PrimeDivisorArr);
});