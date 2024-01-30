// BAHONI TEKSHIRISH
// const students = [
//     {name: "Quincy", percent: 96},
//     {name: "Jason", percent: 84},
//     {name: "Alexis", percent: 100},
//     {name: "Sam", percent: 65},
//     {name: "Katie", percent: 90},
//     {name: "Anna", percent: 75},
// ];

// let arr = students.filter((el) => (el.percent >= 65 <= el.percent))

// console.log(arr);




// ISMINI LENGTHINI TEKSHIRISH
// const students = [
//     {name: "Quincy", percent: 96},
//     {name: "Jason", percent: 84},
//     {name: "Alexis", percent: 100},
//     {name: "Sam", percent: 65},
//     {name: "Katie", percent: 90},
//     {name: "Anna", percent: 75},
// ];

// let arr = students.filter((el) => el.name.length >= 5)

// console.log(arr);
 let section1 = document.querySelector("#section1");



// DOM - Document Object Model
const database = [
    "Ziyod",

];

let userName = prompt("Ismingizni kiriting: ");
// let userParol = +prompt("Parolingizni kiriting: ")
if(database.includes( userName )){
    console.log("true")
    section1.innerHTML= (`${userName}`+ "saytimizga xush kelibsiz");
}  