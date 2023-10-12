import chalk from 'chalk';
import showBanner from 'node-banner';
import inquirer from "inquirer";
(async () => {
    await showBanner('Welcome ! ', '\tThis is a Number Guessing Game');
    let numberByComputer = Math.floor(10 * Math.random());
    // console.log(numberByComputer);
    for (let i = 0; i < 3; i++) {
        let yourGuess = await inquirer.prompt([{
                name: "Guess",
                type: "number",
                message: "Guess any number between 1-10:"
            }
        ]);
        if (numberByComputer === yourGuess.Guess) {
            showBanner('Congratulations', "\t\t\tYou Guess right", "yellow", "green");
            break;
        }
        else if (i == 2) {
            showBanner('Better Luck Next time', "", "red");
        }
        else {
            console.log(chalk.red(`only ${2 - i} chances left`));
        }
    }
})();
