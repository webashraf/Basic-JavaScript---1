// function double(num) {
//     let r = num * 2;
//     return r;
// }
// let n = [15, 25, 30];
// let result = double(10);
// console.log(result);
// console.log(double(100));
// console.log(double(30));
// console.log(double(n[2]));


// // Another Practice
// let nam = "Tamim";
// console.log(nam.length);
// if(nam.length > 4){
//     nam = 'Ali'
// }
// else{
//     nam = 'Ali Ashraf Tamim'
// }
// console.log(nam);


// leepYear Calculation.
// function lYr(yr){
//     result = yr % 4;
//     return result;
// }
// let r = lYr(2001);
// let rs = result == 0;
// if(rs == true){
//     console.log('This is leep Year')
// }
// else{
//     console.log('This is not a leep year.');
// }

// function y(leepYear) {
//     const lpYr = leepYear % 4;
//     if(lpYr == 0){
//         console.log('This is a leep Year');
//     }
//     else{
//         console.log('This is not a leep Year')
//     }
// }
// const res = y(2000);

// Leep Yr Last Practice..

// const leepYr = 1700;
// let r1 = leepYr % 4;
// let r2 = leepYr % 100;
// let r3 = leepYr % 400;

// if((r1 == 0) && (r2 != 0) || (r3 == 0)){
//     console.log('This is a leepYear')
// }
// else{
//     console.log('This is not a leep Year.')
// }

// Factorial Math calculation
// let factorial = 1;
// for (var i = 1; i <= 5; i++) {
//     var factoria = factorial * i;
//     console.log(i, factoria);
// }
// console.log(factorial)

// Factorial in while loop
let x = 1;
let factor = 1;
while(x <= 10){
    factor = factor * x;
    console.log(x, factor);
    x++;
}


// Factorial with for loop in fanction
// function factorial (n){
//     var factor = 1;
//     for (var i = 1; i <= n; i++) {
//     factor = factor * i;
//  }
//     return factor
// }
// var result = factorial(100);
// console.log(result);