//Comment in JavaScript

/*Two types of comment
singal line Comment
multiple Line comment */

// single line Comment

// console.log("Single line comment");

/*multiple line comment */

// console.log("Multiple line comment");

// JavaScript Variable
// var x =10;
// var y = "A";
// var y = "B";
// const check = 5;
// let a = 5;
// console.log(check);
// console.log(a);
// console.log(x);
// console.log(y);

// console.log(a)
// function Check(){
//     a=10;
//    return a;
// }
// console.log(a)
// console.log(Check())

//Javascript Data Types

// var a = 40 // number 
// var b = "string" //string
// let c = "10";

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(+c));
// console.log((+c)+5);

//JavaScript Operators

// console.log(10+20);
// console.log(10-20);
// console.log(10/20);
// console.log(10*20);
// console.log(10==20);
// console.log(10>20);
// console.log(10>=20);
// console.log(10<=20);
// console.log(10<20);
// console.log(10==10 && true );

//LOOPS

// for(i = 5 ; i>0 ; i--){
//     console.log(i)
// }
// let x = 5 ;
// while(x>0){
//     console.log(x)
//     x--;
// }

// do{
//     console.log("samad");
// }while(false)

// JavaScript Function

// function Message(){
//     console.log("Hello This is Message method")
// }
// Message();

// function table (a){
//     sum = 0;
//     for(i = 1 ; i<=10;i++){
//         console.log(i , "*" , a , " = " + i*a);
//     }
   
// }
// table(4);

//for of

// const array = [1,2,3,4,5]

// for(const value of array){
//     console.log(value);
// }

//for In

// const obj = {a:1 ,b:2, c:3};

// for(const value in obj){
//     console.log(value , obj[value]);
// }


//scop
// let x = 10;
// {
//     let x = "a";
//     console.log(x);
// }

// function myfun(){
//     let x =5;
//     console.log(x);
// }
// myfun()
// console.log(x)

//Arrow funcation

// let myfun = (a,b) => a*b;

// console.log(myfun(5,2))

// hello = () =>{
//     return "hello world"
// }

// console.log(hello())

//Hoisting with Variables:

// console.log(x)
// var x = 10;
// console.log(x)

// //Hoisting with Funcation:

// hello();

// function hello(){
//     console.log("Hositing with funcation")


//closure
// function outer(){
//     let outerVariable  = "This is outer variable";

//     function Iner(){
//         console.log(outerVariable);
//     }
//     return Iner
// }

// const clousreExample = outer();
// clousreExample();

//Iterators

// let sum =0;

// const number = [2,3,4,5,6,7,8];

// number.forEach(myfunction)

// function myfunction (item){
//    sum= sum + item
// }

// console.log(sum)

// const number  = [4,9,16,25,36,49]
// const result = number.map(Math.sqrt)
// console.log(result);

// const Saqure = number.map(num => num *num);
// console.log(Saqure)

// const SaquredNumber = number.map(function (num){
//     return num * num;
// });
// console.log(SaquredNumber)


//filter

// const age = [12,25,28,23,20,22,10,9,12]

// const result = age.filter(num => num%2===0);
// console.log(result)

// const ageResult = age.filter(num => num >18)

// // function checkAdult(age) {
// //     return age >= 18;
// //   }
// console.log(ageResult)

const number  = [1,2,4,5,6,7,8,9]

// const result = number.find(num => num>4);
// console.log(result)

// const result = number.findIndex(num => num > 8)
// console.log(result)


// const sum =number.reduce(function(acc , cur){
// return acc + cur;
// },0)

// console.log(sum)

// const result = number.map(num => num* num)
// console.log(result);


// Your array of objects
// const people = [
//     { name: 'John', age: 25, address: '123 Main St' },
//     { name: 'Jane', age: 30, address: '456 Oak St' },
//     // Add more objects as needed
//   ];
  
  // Extract just the ages using map
  const ages = people.filter(person => person.age > 25).map(person => person.age);
  
  console.log(ages);
  
