import askName from "./cli.js";
import readLineSync from "readline-sync";


function runGame(description, game) {

  const name = askName();
  console.log(description);

  let countAnswer = 0;
  while (countAnswer < 3) {
    const { question, answer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer === String(answer)) { 
      console.log('Correct!');
      countAnswer += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    };
  };

  if (countAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  };
}

export default runGame;