#!/usr/bin/env node
import runGame from '../src/index.js';
import { primeDescription, primeGame } from '../src/games/prime-game.js';

runGame(primeDescription, primeGame);
