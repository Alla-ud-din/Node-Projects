import inquirer from "inquirer";
import { createTodoItem } from "./createTodoItem.js";
const list = [{
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
async function menu() {
    let menu = await inquirer.prompt({
        name: "selectMenu",
        type: "list",
        message: "Select option you want to perform",
        choices: ["Adding tasks to a list", "Editing task details", "Deleting tasks",
            "Marking tasks as complete", "Sorting and filtering tasks", "Searching tasks"]
    });
    if (menu.selectMenu === 'Adding tasks to a list') {
        main();
    }
    else if (menu.selectMenu === 'Editing task details') {
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
    else if (menu.selectMenu === 'Deleting tasks') {
        // Perform actions for deleting tasks
        console.log('Selected option: Deleting tasks');
    }
    else if (menu.selectMenu === 'Marking tasks as complete') {
        // Perform actions for marking tasks as complete
        console.log('Selected option: Marking tasks as complete');
    }
    else if (menu.selectMenu === 'Sorting and filtering tasks') {
        // Perform actions for sorting and filtering tasks
        console.log('Selected option: Sorting and filtering tasks');
    }
    else if (menu.selectMenu === 'Searching tasks') {
        // Perform actions for searching tasks
        console.log('Selected option: Searching tasks');
    }
    else {
        console.log('Invalid option selected');
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
    });
    if (completeList.completeList) {
        console.log(list);
    }
}
menu();
