#!/usr/bin/env node
import runGame from "../src/index.js";
import { calcGame, calcDescription } from "../games/calc-game.js";

runGame(calcDescription, calcGame);