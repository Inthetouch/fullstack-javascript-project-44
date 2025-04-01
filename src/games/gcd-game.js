const gcdDescription = 'Find the greatest common divisor of given numbers.';

function algEvklid(numOne, numTwo) {
  while (numTwo !== 0) {
    const temp = numTwo;
    numTwo = numOne % numTwo;
    numOne = temp;
  }
  return numOne;
}

function gcdGame() {
  const numberOne = Math.floor(Math.random() * 100);
  const numberTwo = Math.floor(Math.random() * 100);
  const result = algEvklid(numberOne, numberTwo);
  return { question: `${numberOne} ${numberTwo}`, answer: String(result) };
}

export { gcdDescription, gcdGame };
