import inquirer from "inquirer";
import chalk from "chalk";
export const list = [{
        id: 1,
        title: "Excercise",
        description: "Morning workout for atleast 30 minutes",
        dueDate: "2023-10-16",
        isCompleted: false,
    }, {
        id: 2,
        title: "Read the newspaper",
        description: "Read the newspaper espacially Editor Choice and opinions",
        dueDate: "2023-10-16",
        isCompleted: false
    }];
export async function addtask() {
    const todoItem = await createTodoItem();
    list.push(todoItem);
    console.log(chalk.green('New Todo Item:'));
    console.table(todoItem);
    let completeList = await inquirer.prompt({
        name: "completeList",
        type: "confirm",
        message: "Want to see complete list"
    });
    if (completeList.completeList) {
        console.table(list);
    }
}
let counter = 2;
export async function createTodoItem() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title: '
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description: '
        },
        {
            type: 'input',
            name: 'dueDate',
            message: 'Enter the due date (YYYY-MM-DD): '
        },
        {
            type: 'confirm',
            name: 'isCompleted',
            message: 'Is it completed?'
        }
    ]);
    const newTodoItem = {
        id: ++counter,
        title: answers.title,
        description: answers.description,
        dueDate: answers.dueDate,
        isCompleted: answers.isCompleted
    };
    return newTodoItem;
}
