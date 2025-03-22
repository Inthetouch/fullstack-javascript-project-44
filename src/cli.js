import readLineSync from 'readline-sync';

function askName() {
  const name = readLineSync.question('May I have your name? ');
  return name;
}

export default askName;