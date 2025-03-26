import readLineSync from 'readline-sync';
import askName from '../src/cli.js';

function isEven() {
  
  const name = askName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countAnswer = 0;
  while (countAnswer < 3) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readLineSync.question('Your answer: ');

    if (answer === 'yes' && num % 2 === 0) {
      console.log('Correct!');
      countAnswer += 1;
    } else if (answer === 'no' && num % 2 !== 0) {
      console.log('Correct!');
      countAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num % 2 === 0 ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }    
  }

  if (countAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  };
}

isEven();