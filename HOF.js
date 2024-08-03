function Greet(name) {
    return `Hi ${name}`
}

function Great_name(greeting ,message,name){
    console.log(`${greeting(name)},${message}`)
}

Great_name(Greet,'wel come to MERN Stack course','Samad')
