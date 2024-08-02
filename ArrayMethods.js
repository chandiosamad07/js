// const array = ["Banana", "Orange", "Apple", "Mango"];
// let size = array.length;
// console.log(size)
// console.log(array.toString());
// console.log(array.at(2))
// console.log(array.pop());
// console.log(array.toString());
// array.push("Chary")
// console.log(array.toString());
// array.shift()
// console.log(array.toString());
// array.unshift("Lemon");
// console.log(array.toString());
// array[0]="samad";
// console.log(array.toString());

// const Toyota = ["Grande","Revo","land cruiser","fortuner"];
// const honda = ["Civic","Vezel","BRV","HRV","City"]
// const car = Toyota.concat(honda)
// console.log(car.toString())

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits.toString())


const number = [1,2,3,4,5,6,7,8,9,10]

const num = number.map((number)=>number*number)
console.log(number.map((number)=>number))
console.log(num.toString())
console.log(number.map((number)=>number).filter((number)=> number>5))
console.log(number.reduce((ac,cr)=>ac+cr ,0))

