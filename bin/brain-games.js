#!/usr/bin/env node
import askName from '../src/cli.js';
import gamePrime from './brain-prime.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);

gamePrime(name);