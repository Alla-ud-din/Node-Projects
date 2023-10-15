import inquirer from "inquirer";
import { list } from "./main.js";
export async function edittask() {
    let editTask = await inquirer.prompt({
        name: "selectTask",
        type: "list",
        message: "Select task you want to edit",
        choices: list.map((checkTitle) => checkTitle.title),
    });
    for (let i = 0; i < list.length; i++) {
        if (list[i].title == editTask.selectTask) {
            const propertyToEdit = await inquirer.prompt({
                name: "editProperty",
                type: "list",
                message: "Select a property to edit",
                choices: Object.keys(list[i]),
            });
            if (propertyToEdit.editProperty === "id") {
                console.log("Sorry you can't change id");
            }
            else if (propertyToEdit.editProperty !== "id") {
                const newValue = await inquirer.prompt({
                    name: "newPropertyValue",
                    type: "input",
                    message: `Enter a new value for ${propertyToEdit.editProperty}`,
                });
                list[i][propertyToEdit.editProperty] = newValue.newPropertyValue;
                console.log(list[i]);
                // console.log(chalk.green("Information updated"))
            }
        }
    }
}
