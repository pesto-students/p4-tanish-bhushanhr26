function fibonacciSeries(n){
let n1 = 0;
let n2 = 1;
let result = 0 ;
for(let i =0;i<n;i++){
    console.log(n1)
    result = n1 + n2;
    n1 = n2;
    n2 = result

}
return result
}
console.log(fibonacciSeries(5))
console.log(fibonacciSeries(6))
console.log(fibonacciSeries(2))
console.log(fibonacciSeries(10))
