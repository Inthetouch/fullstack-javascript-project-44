const calcDescription = 'What is the result of the expression?';

function calculation(numOne, numTwo, operator) {
  let result = 0;
  switch(operator) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
  };
  return result
}

function calcGame() {
  const numberOne = Math.floor(Math.random() * 100);
  const numberTwo = Math.floor(Math.random() * 100);
  const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  const result = calculation(numberOne, numberTwo, operator);
  return { question: `${numberOne} ${operator} ${numberTwo}`, answer: String(result) };
};

export { calcDescription, calcGame };