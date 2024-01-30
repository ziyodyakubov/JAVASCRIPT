// 1 - misol

// let num = +prompt("Enter a number: ");

// let array = []

// for(let i = 0;i <= num; i++){
//     array.push(i);
// }

// console.log(array);


// 8-misol

// let array =[1,2,3,4,5,6,7,8,9,10];
// let array2 = [];

// function arrNumbers(K,L){
//     for(let i = 0;i <= array.length; i++){
//         if(K == array[i]){
//             for(let k = 0;k <= array.length; k++){
//                 if(L == array[k]){
//                     for(let j = K; j <= L;j++){
//                         array2.push(j);
//                     }
//                 }
//             }
//         }
//     }
//     console.log(`Array: ${array2}`);

//     let sum = 0;

//     for(let i = 0; i < array2.length;i++){
//         sum += array2[i];
//     }

//     console.log(`Total number: ${sum}`)
// }


// arrNumbers(6,10)


// 9 - misol 

let array2 = [];

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function findUppernumber(){
    for(let i = 0;i <= array.length;i++){
        if(array[i] % 2 == 0){
            array2.push(i);
        }
    }
    console.log(array2)
    

    var result = Math.max(...array2);
    
    console.log(`Eng katta son: ${result}`)
}

findUppernumber()



// 10 - misol 
// let array2 = [];


// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// function findLowernumber(){
//     for(let i = 0;i <= array.length;i++){
//         if(array[i] % 2 == 0){
//             array2.push(i);
//         }
//     }
//     console.log(array2)
    

//     var result = Math.min(...array2);
    
//     console.log(`Eng kichkina son: ${result}`)
// }

// findLowernumber()


// 11 -misol


// let array2 = [];

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// function findUppernumber(){
//     for(let i = 0;i <= array.length;i++){
//         if(array[i] % 2 != 0){
//             array2.push(i);
//         }
//     }
//     console.log(array2)
    

//     var result = Math.max(...array2);
    
//     console.log(`Eng katta son: ${result}`)
// }

// findUppernumber()



// 12 - misol

// let array = [3,3,4]
// let sum = 0;

// function totalNumber(){
//     for(let  i = 0;i < array.length;i++){
//         var result = sum += array[i]
//     }

//     let mainResult = result / array.length;

//     console.log(`O'rta arifmetigi: ${mainResult}`)
    
// }

// totalNumber()




// 13-misol


// let array2 = [];

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// function findUppernumber(){
//     for(let i = 0;i <= array.length;i++){
//         if(array[i] % 2 != 0){
//             array2.push(i);
//         }
//     }
//     console.log(array2)
// }

// findUppernumber()


// 14 - misol


// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// let array2 = []

// function ComplexNumber(){
//     if(array.length < 4){
//         return "Not complex";
//     }

//     for(let i = 4;i < array.length; i++){
//         for(let j = 2;j < i;j++){
//             if(i % j == 0){
//                 array2.push(array[i]);
//                 break;
//             }
//         }
//     }

//     return array2
// }

// console.log(ComplexNumber())


// 15 -misol


// let array2 = [];

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// function findUppernumber(){
//     for(let i = 0;i <= array.length;i++){
//         if(i % 2 != 0){
//             array2.push(i);
//         }
//     }
//     console.log(array2)
// }

// findUppernumber()


// 16 - misol


// let array = [true,false,"ibrohim",23,"Hello"]

// console.log(array.join())

// 17 -misol


// let a = [1,2,3,4,5,6,8]
// let b = [2,3,6,23,45,67]

// function compareArray(){
//     for(let i = 0; i < a.length;i++){
//         for(let k = 0; k < b.length;k++){
//             if(a[i] == b[k]){
//                 console.log(`O'zaro teng son: ${a[i]} - ${b[k]}`)
//                 break;
//             }
//         }
//     }
// }

// compareArray()


// 18 - misol

// let arr =[];

// for(let i = 0;i < 5;i++){
//     var wholeNumber = +prompt("Son kiriting: ")
//     arr.push(wholeNumber)
// }


// console.log(arr);
// 19-misol

// let summa =0;
// for(let i = 0;i < 5;i++){
//     var wholeNumber = +prompt("Son kiriting: ")
//     summa += wholeNumber
// }


// console.log(summa);

// 20 -masala

// var num = +prompt("Son kiriting: ")
// var boolean = prompt("Juft yoki Toq: ")

// for(let i = 1;i <= num; i++){
//     if(boolean == "juft" || boolean == "Juft" || boolean == "JUFT"){
//         if(i % 2 == 0){
//             console.log(i);
//         }
//     }else if(i % 2 != 0){
//         console.log(i)
//     }
// }



// 21 - misol

// let array = [1,2,3,true]

// console.log(array[array.length-1])


// 22 - misol

// let array = [1,2,3,6,7,3,3,4,5,2]
// let array2 = []
// for(let i = 0;i < array.length;i++){
//     if(array.includes(i)){
//         array2.push(i)
//     }
// }

// console.log(array2)


// let karra = 10;

// for(let i = 1;i <= karra;i++){
//     for(let j = 1;j <= karra;j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
//     console.log(" ")
// }