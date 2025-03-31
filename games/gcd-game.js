const gcdDescription = 'Find the greatest common divisor of given numbers.';

function algEvklid(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function gcdGame() {
  const numberOne = Math.floor(Math.random() * 100);
  const numberTwo = Math.floor(Math.random() * 100);
  const result = algEvklid(numberOne, numberTwo);
  return { question: `${numberOne} ${numberTwo}`, answer: String(result) };
}

export { gcdDescription, gcdGame };