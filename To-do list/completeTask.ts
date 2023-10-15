import inquirer from "inquirer";
import { list } from "./createTodoItem.js";
export async function completeTask(){
let markTask = await inquirer.prompt({
    name: "selectTask",
    type: "list",
    message: "Select task you want to mark complete",
    choices: list.map((checkTitle)=>checkTitle.title),
})
for (let i = 0; i<list.length; i++){
    if (list[i].title=== markTask.selectTask){
        list[i].isCompleted = true;
    }
}
// console.log(list);
let completeList = await inquirer.prompt({
    name: "completeList",
    type: "confirm",
    message: "Want to see complete list"
})
if (completeList.completeList){console.table(list);}
}