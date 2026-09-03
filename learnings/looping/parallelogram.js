const readline = require('readline-sync');

const heightShape = Number(readline.question('Enter height shape: '));

for (let bar = 1; bar <= heightShape; bar++) {
    let printShape = '';
    
    for (let space = 1; space <= heightShape - bar; space++) {
        printShape += ' ';
    }
    for (let symbol = 1; symbol <= (heightShape); symbol++) {
        printShape += '*';
    }
    console.log(printShape);
}