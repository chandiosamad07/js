/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

// const { date } = require("yup");

// var today = new Date();
// var date = today.getDate();
// var day = today.getDay();
// Array of day names
// var daylist = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var hour = today.getHours();
// var mins = today.getMinutes();
// var sec = today.getSeconds();

// console.log("Today is " + daylist[day] + " and Date is ", date);
// console.log("Curent time is", hour, ":", mins, ":", sec);

/*
Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

// console.log((today.getMonth()+1),"-",today.getDate(),"-",today.getFullYear())

/*
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
*/

// var side1 = 5
// var side2 = 6
// var side3 = 7

// var s = (side1+side2+side3)/2
// var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
// console.log(area);

//sawping two variable values

// let a = 5;
// let b = 2;

// console.log("Befor Sawping")
// console.log(a);
// console.log(b);

// [a, b] = [b, a];


// console.log("After Sawping")
// console.log(a);
// console.log(b);

// let abc = [1,2,3,4,5,6]
// // let result = abc.map(num => num*num)
// let result = abc.filter(num => num >3).map(num => num)
// console.log(result);


//for of and for in

// const num = [1,2,3,4,5,6,7,8,9]
// const person = {
//     a:1,b:2,c:3
// }
// for(const value of num){
//     if(value%2==0)
//     console.log(value)
// }

// for(const obj in person){
//     if(person[obj]%2==0)
//     console.log(obj, person[obj])
// }

//Spread Operator

// const array = [1,2,3,4,5]

// const array2 = [6,7,8,9,10]

// const array3 = [...array , ...array2]

// for(value of array3){
//     console.log(value)
// }
// // console.log(array3)

// const [one,two , ...rest] = array
// console.log(rest)

// Rest oprator

// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
  
//   let x = sum(4, 9, 16, 25, 29, 100);
// console.log(x);  

// const d = new Date();
// console.log(d.getDay() + " " +d.getDate() +" " + d.getFullYear())

//hoisting
// x = 5
// console.log(x)
// var x;

// car = "Range Rover"
// var car;
// console.log(car)


//Arrow Funcation

// let myfunction = (a,b) => a*b;
// console.log(myfunction(5,4))

// let hello =  function(){
//   console.log("hello world")
// }
// hello()

// let hello =() =>{
//   console.log("Hello Abdul This is Arrow Funcation")
// }

// let hello = () => "Hello samad"
// console.log(hello())

// let hello = (...arg) =>{
//   let sum = 0;
//   for(let value of arg){
//     sum = sum+value
//   }
//   console.log(sum)
// }

// hello(1,2,3,4,5,6,7,8,9,0,-10,11)


// const people = [
//   { name: "Samad ", age: 20 },
//   { name: "Abdul samad", age: 22 },
//   { name: "Chandio samad", age: 51 }
// ];

var result = people.filter(people => people.age > 21).map(people => people);
console.log(result);
