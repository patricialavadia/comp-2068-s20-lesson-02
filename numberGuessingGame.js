/*
*Author: Patricia Anjelica Lavadia
*Number Guessing Game
*/
console.clear();
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const number = Math.round(Math.random() * (10-1) + 1)

const guess = async guess => {
    return new Promise((resolve, reject) =>{
        r1.question("Guess a number (1-10): ",answer =>{
            return resolve(number == answer);
        })
    });
};

let cont = false;

(async () => {
    while(!cont){
        cont = await guess();
        console.clear();
        if(!cont) console.error("Sorry Try Again!");
    }
    console.clear();
    console.log("Congratulations!");
    r1.close();
})();