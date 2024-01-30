let num = +prompt("Enter a number: ");
let array = []

for(let i = 0;i <= num;i++){
    if(i % 2 != 0){
        array.push(i)
    }
}

console.log(array)