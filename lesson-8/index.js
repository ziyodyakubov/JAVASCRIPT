// const nootebookInformation = {
//     company:"HP",
//     color:"Silver",
//     price:"$350",
//     memory:255,
//     processor:"AMD Ryzen 5 5500U",
//     RAM:8,
//     getColor: function (){
//         console.log(this.color);
//     },

//     getFullname: function (){
//         console.log(this.company + this.processor);
//     }
// }

// // console.log(nootebookInformation.company);
// // console.log(nootebookInformation.memory);
// // console.log(nootebookInformation.processor);
// // console.log(nootebookInformation.RAM);
// // console.log(nootebookInformation)

// nootebookInformation.getColor()
// nootebookInformation.getFullname()


// const calculator = {
//     plus: function (a,b){
//         return a + b;
//     },

//     minus: function (a,b){
//         return a - b;
//     },

//     increase: function (a,b){
//         return a * b;
//     },

//     decrease: function (a,b){
//         return a / b;
//     },
// }

// console.log(calculator.increase(7,2));


// const car = {
//     motor:4.5,
//     brand:"Brabus 400",
//     speed:350,
//     company:"Meredez benz",
//     horsePower:50,
//     color:"black",
//     year:2021,
//     mileage:45.000,

//     getBrand: function (){
//         console.log(this.brand);
//     },

//     getCompany: function(){
//         console.log(this.company);
//     },
// }

// car.getBrand()


// let array =[1,2,3,4,5,6,7,8,9,10];
// let sum = 0;

// function arrNumbers(K,L){
//     for(let i = 0;i < array.length; i++){
//         K = array[i]

//         for(let j = K; j < L;j++){
//         sum += j;
//     }
// }


//     console.log(`Total number: ${sum}`)
// }


// arrNumbers(1,2)

// let sum = 0;

// let products = [
//     {
//         name:"olma",
//         price:12000,
//     },

//     {
//         name:"kartoshka",
//         price:5000,
//     },

//     {
//         name:"Non",
//         price:2800,
//     },
// ]

// for(let i = 0;i < products.length;i++){
//     sum += products[i].price
// }

// console.log(sum);

// let all = 0;
// let result = 0;

// const people = [
//     {
//         name:"Shohjahon",
//         age:17
//     },

//     {
//         name:"Jahongir",
//         age:21
//     },

//     {
//         name:"Elbek",
//         age:20
//     },

//     {
//         name:"Jamshid",
//         age:21
//     },

//     {
//         name:"Ibrohim",
//         age:19
//     },

//     {
//         name:"Ziyod",
//         age:19
//     },
// ]

// function getAverageAge(){
//     for(let i = 0;i < people.length;i++){
//         all += people[i].age
//     }
//     console.log(all / people.length);
// }

// getAverageAge()