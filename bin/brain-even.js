#!/usr/bin/env node
import runGame from "../src/index.js";
import { evenGame, evenDescription } from "../src/games/even-game.js";

runGame(evenDescription, evenGame);