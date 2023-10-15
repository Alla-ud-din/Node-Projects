import inquirer from "inquirer"
import { addtask, todo_item } from "./createTodoItem.js";
import { createTodoItem } from "./createTodoItem.js";
import { edittask } from "./editTask.js";
import { deleteTask } from "./deleteTask.js";
import { completeTask } from "./completeTask.js";

async function menu(){
    let menu = await inquirer.prompt({
        name: "selectMenu",
        type: "list",
        message: "Select option you want to perform",
        choices: ["Adding tasks to a list", "Editing task details", "Deleting tasks", "Marking tasks as complete"]
    })
    if (menu.selectMenu === 'Adding tasks to a list') {
        addtask();
    } else if (menu.selectMenu === 'Editing task details') {
        edittask();
    } else if (menu.selectMenu === 'Deleting tasks') {
        deleteTask();
    } else if (menu.selectMenu === 'Marking tasks as complete') {
        completeTask();
    }
}
menu()
export async function callback(){
    menu()
}
