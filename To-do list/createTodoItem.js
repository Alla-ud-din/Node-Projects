import inquirer from "inquirer";
import { callback } from "./main.js";
export const list = [{
        id: 1,
        title: "abc",
        description: "aaaaaaaaaaaaaaabbbbbbbbcccccccccc",
        dueDate: new Date(),
        isCompleted: false,
    }, {
        id: 2,
        title: "def",
        description: "ddddddddddeeeeeeeeefffffffffff",
        dueDate: new Date(),
        isCompleted: true
    }];
export async function addtask() {
    const todoItem = await createTodoItem();
    list.push(todoItem);
    console.log('New Todo Item:');
    console.log(todoItem);
    let completeList = await inquirer.prompt({
        name: "completeList",
        type: "confirm",
        message: "Want to see complete list"
    });
    if (completeList.completeList) {
        console.log(list);
    }
    callback();
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
