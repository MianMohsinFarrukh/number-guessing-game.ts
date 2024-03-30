#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNo = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNo",
        type: "number",
        message: "plz Guess a number ( 1 - 6 ) = ",
    }
]);
if (answer.userGuessedNo === randomNo) {
    console.log(chalk.green `congratulations ! You Guessed a Right Number .`);
}
else {
    console.log(chalk.red ` You Guessed a Wrong Number `);
}
console.log(answer);
