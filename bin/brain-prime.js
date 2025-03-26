import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

function isSimple(num) {
  if (num <= 1) { return false };
  if (num === 2) { return true };
  if (num % 2 === 0) { return false };

  const sqrtNum = Math.floor(Math.sqrt(num));

  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) { return false };
  };

  return true;
}

function gamePrime() {

  const name = askName();

  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");

  let countAnswer = 0;
  while (countAnswer < 3) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const result = isSimple(num) ? 'yes' : 'no';

    if (answer === result) {
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
  };
}

gamePrime();