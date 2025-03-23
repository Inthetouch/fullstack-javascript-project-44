#!/usr/bin/env node
import askName from '../src/cli.js';
import gameProgression from './brain-progression.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);

gameProgression(name);