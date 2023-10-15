import inquirer from "inquirer";
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
