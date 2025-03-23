import readLineSync from 'readline-sync';

function algEvklid(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function gameNod (name) {
  console.log("Find the greatest common divisor of given numbers.");

  let countAnswer = 0;
  while (countAnswer < 3) {
    const numberOne = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    console.log(`Question: ${numberOne} ${numberTwo}`);
    const answer = readLineSync.question('Your answer: ');
    
    if (answer === String(algEvklid(numberOne, numberTwo))) {
      console.log('Correct!');
      countAnswer += 1;
    } else { 
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${algEvklid(numberOne, numberTwo)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    };
  
    if (countAnswer === 3) {
      console.log(`Congratulations, ${name}!`);
    };
  }
}

export default gameNod;