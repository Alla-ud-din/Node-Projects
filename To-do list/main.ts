import inquirer from "inquirer"
import { addtask, list, todo_item } from "./createTodoItem.js";
import { createTodoItem } from "./createTodoItem.js";
import { edittask } from "./editTask.js";
import { deleteTask } from "./deleteTask.js";
import { completeTask } from "./completeTask.js";
import showBanner from "node-banner";

(async () => {
    await showBanner('The Title', 'This is a suitable tagline');
async function menu(){
    let menu = await inquirer.prompt({
        name: "selectMenu",
        type: "list",
        message: "Select option you want to perform",
        choices: ["Tasks for today", "Adding tasks to a list", "Editing task details", "Deleting tasks", "Marking tasks as complete"]
    })
    if (menu.selectMenu === 'Tasks for today'){
        console.table(list);
    }
    else if (menu.selectMenu === 'Adding tasks to a list') {
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
function callback(){
    menu()
}
})();
