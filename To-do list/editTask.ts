import inquirer from "inquirer";
import { callback } from "./main.js"
import { list } from "./createTodoItem.js";
export async function edittask(){
let editTask = await inquirer.prompt({
    name: "selectTask",
    type: "list",
    message: "Select task you want to edit",
    choices: list.map((checkTitle: { title: any; })=>checkTitle.title),
})
for (let i = 0; i<list.length; i++){
  let more = true;
    if (list[i].title == editTask.selectTask ){
      do{
        const propertyToEdit = await inquirer.prompt({
          name: "editProperty",
          type: "list",
          message: "Select a property to edit",
          choices: Object.keys(list[i]),
        });
        if (propertyToEdit.editProperty === "id"){
        console.log("Sorry you can't change id")
        }
        else if (propertyToEdit.editProperty === "isCompleted"){
          const newValue = await inquirer.prompt({
            name: "newPropertyValue",
            type: "confirm",
            message: `Enter a new value for ${propertyToEdit.editProperty}`,
            });
        }
        else if (propertyToEdit.editProperty !== "id" && propertyToEdit.editProperty !== "isCompleted"){
          const newValue = await inquirer.prompt({
          name: "newPropertyValue",
          type: "input",
          message: `Enter a new value for ${propertyToEdit.editProperty}`,
          });
          list[i][propertyToEdit.editProperty] = newValue.newPropertyValue;
        }
        let morechanges = await inquirer.prompt({
          name: "changes",
          type: "confirm",
          message: "Do you want to make any other changes"
        })
        more = morechanges.changes;
      }while(more)
        console.log(list[i]);
            // console.log(chalk.green("Information updated"))
      } 
  } 
    callback();    
}