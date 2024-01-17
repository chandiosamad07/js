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

const fruits = new Map([
    ["apples", 500],
["bananas", 300],
["oranges", 200]
])
console.log(fruits);