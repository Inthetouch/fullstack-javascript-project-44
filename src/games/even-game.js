const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
function evenGame() {
  const number = Math.floor(Math.random() * 100);
  const result = number % 2 === 0 ? 'yes' : 'no';
  return { question: number, answer: result };
}

export { evenDescription, evenGame };