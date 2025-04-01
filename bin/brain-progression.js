#!/usr/bin/env node
import runGame from '../src/index.js';
import { progressionDescription, progressionGame } from '../src/games/progression-game.js';

runGame(progressionDescription, progressionGame);
