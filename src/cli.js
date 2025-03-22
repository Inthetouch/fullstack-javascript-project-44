import readLineSync from 'readline-sync';

function askName() {
    const name = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);   
}

export { askName };