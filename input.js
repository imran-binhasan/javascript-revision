// In web, we use prompt() to get input from the user.which will popup a prompt in web page
// let name = prompt("Enter your name: ");



// In Node.js, we use readline, process.stdin or prompt-sync (extra dependency) to get input from the user.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter your name: ', (name) => {
//     console.log('Hello, ' + name + '!');
//     rl.close();
// })

// Alternative : process.stdin

// process.stdin.write('Enter your age: ');

// process.stdin.on("data", (age)=> {
//     console.log("Okay,so you are "+ age.toString().trim() +" years old !");
//     process.exit();
// })

// Alternative 2 : prompt-sync

const prompt = require("prompt-sync")()

const mail = prompt("Enter your email: ")

console.log(mail)


