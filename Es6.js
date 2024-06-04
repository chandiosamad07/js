//JavaScript let

// var x = 10;
// {
//     let x = 2;
//     console.log(x)
// }

// console.log(x)

//Arrow Funcation

// var x = function(x,y){
//     return x*y
// }
// console.log(x(2,2));

// const z = (x,y)=> {return x*y};
// console.log(z(2,3));

//The Spread (...) operator

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];
// const year = [...q1,...q2,...q3,...q4]
// console.log(year)

// const number = [23,55,21,87,56]
// let maxValue = Math.max(...number);
// console.log(maxValue)

//The For/Of loop

// const car = ["BMW","Volo","Mini","Toyota","Honda"]
// let text = "";

// for(x of car){
//     text += x+" ";
// }
// console.log(text);

// let language = "JavaScript"
// let text = ""
// for(x of language){
//     text += x + " "
// }
// console.log(x);

//Map

// const fruits = new Map([
//     ["apples", 500],
// ["bananas", 300],
// ["oranges", 200]
// ])
// console.log(fruits);

//default paramter

// function myfunction(x,y=10){
//     return x + y
// }
// console.log(myfunction(5));

//Rest Argument

// function sum (...args){
//     let sum = 0;
//     for(arg of args){
//         sum += arg;
//     }
//     return sum;
// }
// console.log(sum(1,2,1,5,9,72))
// console.log(sum(1,2,9,72))

//String includes()
//String.startsWith()
//String.endsWith()

// let text = "Hello world , Welcome to the samad's Coding"
// console.log(text.includes("Welcome"));
// console.log(text.startsWith("Hello"));
// console.log(text.endsWith("Coding"));

// let firstName = "Abdul"
// let lastName = "Samad"

// let text = `Welcom ${firstName} ${lastName} Chandio`
// console.log(text)

//Enhanced Object Literals

// var name = "Samad"
// var cast = "Chandio"
// var age = 24

// var insan = {name,cast,age}
// console.log(insan)

// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car, truck, suv] = vehicles;
// console.log(car);
// console.log(truck);
// console.log(suv);
// console.log(vehicles);

const person = {name:'Samad', age:30,city:'New York'};
const {name , age, city} = person;
console.log(name)
console.log(age)
console.log(city)
// console.log(person)

// const number = [1,2,3,4,5]
// const [,,,five]=number
// console.log(five)

//swapping a values using destructure

let a = 55;
let b = 41;
[a, b] = [b, a];
console.log(a);
console.log(b);

// let a = 55;
// let b = 41;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

const number = [1,2,3,4,5,6,7,8,9]
const [first,...rest] = number;
console.log(first)
console.log(rest)