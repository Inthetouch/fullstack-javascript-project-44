import readlineSync from 'readline-sync';

function genProgression() {
  const progression = [];
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < length; i += 1) { 
    progression.push(start + step * i);
  };

  return progression
}

function hideElement(progression) {
  const hideIndex = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[hideIndex];
  progression[hideIndex] = '..';
  return { question: progression.join(' '), answer: hiddenElement };
}

function gameProgression(name) {
  console.log("What number is missing in the progression?");

  let countAnswer = 0;
  while (countAnswer < 3) {
    const progression = genProgression();
    const { question, answer } = hideElement(progression);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(answer)) { 
      console.log('Correct!');
      countAnswer += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    };
  };
}

export default gameProgression;