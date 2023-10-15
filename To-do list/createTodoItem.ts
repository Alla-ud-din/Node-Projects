import inquirer from "inquirer"
export interface todo_item {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
}
let counter = 0;
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
    const newTodoItem: todo_item = {
        id: ++counter,
        title: answers.title,
        description: answers.description,
        dueDate: answers.dueDate,
        isCompleted: answers.isCompleted
    };
    return newTodoItem;
}