import inquirer from "inquirer"
import { todo_item } from "./createTodoItem.js";
import { createTodoItem } from "./createTodoItem.js";
import { edittask } from "./editTask.js";
import { deleteTask } from "./deleteTask.js";
import { completeTask } from "./completeTask.js";
export const list: any[]=[{
    id: 1,
    title: "abc",
    description: "aaaaaaaaaaaaaaabbbbbbbbcccccccccc",
    dueDate: new Date(),
    isCompleted: false,
},{
    id: 2,
    title: "def",
    description: "ddddddddddeeeeeeeeefffffffffff",
    dueDate: new Date(),
    isCompleted: true
}]
async function menu(){
    let menu = await inquirer.prompt({
        name: "selectMenu",
        type: "list",
        message: "Select option you want to perform",
        choices: ["Adding tasks to a list", "Editing task details", "Deleting tasks", 
        "Marking tasks as complete", "Sorting and filtering tasks", "Searching tasks"]
    })
    if (menu.selectMenu === 'Adding tasks to a list') {
        main();
    } else if (menu.selectMenu === 'Editing task details') {
        edittask();
    } else if (menu.selectMenu === 'Deleting tasks') {
        deleteTask();
    } else if (menu.selectMenu === 'Marking tasks as complete') {
        completeTask();
    }
}
async function main() {
    const todoItem = await createTodoItem();
    list.push(todoItem);
    console.log('New Todo Item:');
    console.log(todoItem);
    let completeList = await inquirer.prompt({
        name: "completeList",
        type: "confirm",
        message: "Want to see complete list"
    })
    if (completeList.completeList){console.log(list);}
}
menu()
