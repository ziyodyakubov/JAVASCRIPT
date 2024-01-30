// function sum(N){
//     let total=0
//     for(let i=1; i<=N; i++){
//         total+=i
//     }
//     console.log(total)
// }
// sum(3)






// let a = +prompt("hafta kuni");
// switch (a) {
//   case 1: {
//     console.log("yakshanba");
//     break;
//   }

//   case 2: {
//     console.log("dushanba");
//     break;
//   }

//   case 3: {
//     console.log("seshanba");
//     break;
//   }

//   case 4: {
//     console.log("chorshanba");
//     break;
//   }

//   case 5: {
//     console.log("payshanba");
//     break;
//   }

//   case 6: {
//     console.log("juma");
//     break;
//   }

//   case 7: {
//     console.log("shanba");
//     break;
//   }

//   default: {
//     console.log("bunday hafta kuni yoq");
//     break;
//   }
// }




// let b = +prompt("sonni kiriting");
// switch (b) {
//   case 1:
//   case 6:
//     console.log("qora");
//     break;
//   case 2:
//   case 7:
//     console.log("qizil");
//     break;
//   case 3:
//   case 8:
//     console.log("oq");
// }



// let n=8
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }



////////////////////////////////////
// VAZIFA //////////
////////////////////////////////////



// 1- MISOL

// function power(a, n){
//     return Math.pow(a, n);
// }

// let a = 3;
// let n = 5;
// console.log(power(a,n));


// 2-MISOL
// function mean(a,b){
//     console.log((a+b) / 2 + " o'rta arifmetig");
//     console.log(b / 2+ " Geometrig");
// }

// let a = 12;
// let b = 48;
// mean(12,48);

// 3-MISOL
// function sign(n){
//     if(n > 0){
//         return 1;
//     }else if(n < 0){
//         return -1;
//     }else{
//         return 0;
//     }
// }

// let n = 5;
// console.log(sign(n));

// 4-MISOL
// function numberOfRoots(A, B, C){
//     let D = B*B - 4*A*C;
//     if(D > 0)
//         return "2 ta";
//     else if(D == 0)
//         return "1 ta";
//     else
//         return "0 ta";
// }


// let a = 1;
// let b = -6;
// let c = 9;
// console.log(numberOfRoots(a,b,c));


// 5-MISOL
// function areaCircle(R){
//     let s = Math.PI * (R*R);
//     return s
// }

// let r = 10;
// console.log(areaCircle(r));


// 6-MISOL
// function sumRange(A, B){
//     if(A < B){
//         let sum = 0;
//         for (let index = A; index <= B; index++) {
//             sum += index;
//         }
//         return sum;
//     }else{
//         return 0;
//     }
// }

// let a = 8;
// let b = 10;
// console.log(sumRange(a,b));


// 7-MISOL
// function calc(A, B, S){
//     if(S == "*")
//         return A * B;
//     else if(S == "/")
//         return A / B;
//     else if(S == "-")
//         return A - B;
//     else if(S == "+")
//         return A + B;
//     else
//         return 0;
// }

// let a = 10;
// let b = 15;
// let s = "*";
// console.log(calc(a,b,s));


// 8-MISOL
// function  isEven(K){
//     if(K % 2 == 0)
//         return true;
//     else
//         return false;
// }

// let k = 17;
// console.log(isEven(k));

// 9-MISOL
// function  sortABC(a, b, c){
//     let max = 0;
//     let midle = 0;
//     let min = 0;
    
//     if(a > b && a > c)
//         max = a;
//     else if(b > a && b > c)
//         max = b;
//     else
//         max = c;

//     if(a < b && a > c || a > b && a < c)
//         midle = a;
//     else if(b < a && b > c || b < a && b > c)
//         midle = b;
//     else
//         midle = c;


//     if(a < b && a < c)
//         min = a;
//     else if(b < a && b < c)
//         min = b;
//     else
//         min = c
    
//     console.log(min, midle, max);

// }


// let a = 10;
// let b = 12;
// let c = 8;
// sortABC(a,b,c);

// 10-MISOL
// function isPowerN(K, N){
//     for (let index = 1; index <= N; index++) {
//         if(K == Math.pow(N, index))
//             return true;
//     }
//     return false;
// }

// let k = 9;
// let n = 3;
// console.log(isPowerN(k,n));

// 11-MISOL
// function  isPrime(N){
//     let sum = 0;
//     for (let index = 2; index < N; index++) {   
//         if(N % index == 0)
//             sum += 1;
//     }

//     if(sum > 0)
//         return false;
//     else
//         return true;
// }

// let n = 12;
// console.log(isPrime(n));
