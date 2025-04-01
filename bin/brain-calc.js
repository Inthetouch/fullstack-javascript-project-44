#!/usr/bin/env node
import runGame from "../src/index.js";
import { calcGame, calcDescription } from "../src/games/calc-game.js";

runGame(calcDescription, calcGame);