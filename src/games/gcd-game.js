const gcdDescription = 'Find the greatest common divisor of given numbers.';

function algEvklid(numOne, numTwo) {
  let first = numOne;
  let second = numTwo;

  while (second !== 0) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  return first;
}

function gcdGame() {
  const numberOne = Math.floor(Math.random() * 100);
  const numberTwo = Math.floor(Math.random() * 100);
  const result = algEvklid(numberOne, numberTwo);
  return { question: `${numberOne} ${numberTwo}`, answer: String(result) };
}

export { gcdDescription, gcdGame };
