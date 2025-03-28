const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

function primeGame() {
  const num = Math.floor(Math.random() * 100);
  const result = isSimple(num) ? 'yes' : 'no';
  return { question: num, answer: result };
}

export { primeDescription, primeGame };