//CallBack Example 1
const Goodby=()=>{
    console.log('Good By')
}
function Message(name ,callback){
    console.log(`Hello ${name}`)
    callback()
}
Message("Abdul",Goodby)
//CallBack Example 2

function calculate(a,b,callback){
    console.log(`Calculating with ${a} and ${b}`);
    const result = callback(a,b)
    console.log(`Result : ${result}`)
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

calculate(12,14,add)