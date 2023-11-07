//let variable is block level scop and its reassign the values
// let name = "samad";
// console.log(name);
// name = "Chandio"
// console.log(name);

// const PI = 3.14;
// console.log(PI);
// PI = 4;  //here is Assignment error because Const variable can't reassign new value
// console.log(PI);


//its not a block level scop its global scop
var count =0;
if(true){
    var count =1;
    console.log(count);
}
console.log(count);