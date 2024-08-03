
const Goodby=()=>{
    console.log('Good By')
}

function Message(name ,callback){
    console.log(`Hello ${name}`)
    callback()
}

Message("Abdul",Goodby)