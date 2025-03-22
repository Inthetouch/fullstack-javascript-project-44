import readLineSync from 'readline-sync';

function calculation(numOne, numTwo, operator) {
  let result = 0;
  switch(operator) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
  };
  return result
}

function calcGame(name) {
  console.log("What is the result of the expression?");

  let countAnswer = 0;
  while (countAnswer < 3) {

    const numberOne = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];

    console.log(`Question: ${numberOne} ${operator} ${numberTwo}`);
    
    const answer = readLineSync.question('Your answer: ');
    const result = calculation(numberOne, numberTwo, operator);
  
    if (answer === String(result)) {
      console.log('Correct!');
      countAnswer += 1;
    } else { 
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    };
  
    if (countAnswer === 3) {
      console.log(`Congratulations, ${name}!`);
    };
  
  } 
}

export default calcGame;