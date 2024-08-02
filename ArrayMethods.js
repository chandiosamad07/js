const array = ["Banana", "Orange", "Apple", "Mango"];
let size = array.length;
console.log(size)
console.log(array.toString());
console.log(array.at(2))
console.log(array.pop());
console.log(array.toString());
array.push("Chary")
console.log(array.toString());
array.shift()
console.log(array.toString());
array.unshift("Lemon");
console.log(array.toString());
array[0]="samad";
console.log(array.toString());

const Toyota = ["Grande","Revo","land cruiser","fortuner"]
const honda = ["Civic","Vezel","BRV","HRV","City"]
const car = Toyota.concat(honda)
console.log(car.toString())