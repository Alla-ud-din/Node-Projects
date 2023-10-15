import inquirer from "inquirer";
import { list } from "./main.js";
export async function deleteTask(){
let deleteTask = await inquirer.prompt({
    name: "selectTask",
    type: "list",
    message: "Select task you want to delete",
    choices: list.map((checkTitle)=>checkTitle.title),
})
console.log("list before deleting", list)
for (let i = 0; i<list.length; i++){
    if (list[i].title == deleteTask.selectTask ){
        list.splice(i,1);
    }
}
// Perform actions for deleting tasks
console.log("list after deleting", list);
// console.log('Selected option: Deleting tasks');
}