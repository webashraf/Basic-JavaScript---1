// Fibonacchi
// Example 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// Example 0+1= 1, 1+1= 2, 1+2= 3, 2+3= 5, 3+5= 8, 5+8= 13, 8+13= 21, 13+21= 34, 21+34= 55, 34+55= 89, 55+89= 144 ...


// Iterative mathod...
// function fibonacchi(n){
//     let fibona = [0, 1];
//     for(var i = 2; i <= n; i++){
//         fibona[i] = fibona[i - 1] + fibona[i - 2];
//     }
//     return fibona
// }
// let result = fibonacchi(12);
// console.log(result);

// Recursive mathod...

function fib(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
       return fib(n - 1) + fib(n - 2);
    }
}

let result = fib();
console.log(result);