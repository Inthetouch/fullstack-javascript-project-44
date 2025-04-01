#!/usr/bin/env node
import runGame from "../src/index.js";
import { gcdDescription, gcdGame } from "../src/games/gcd-game.js";

runGame(gcdDescription, gcdGame);