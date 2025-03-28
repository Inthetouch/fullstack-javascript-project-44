const progressionDescription = 'What number is missing in the progression?';

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

function progressionGame() {
  const progression = genProgression();
  const { question, answer } = hideElement(progression);
  return { question, answer };
}

export { progressionDescription, progressionGame };