import inquirer from "inquirer";
// import { studentProfile } from "./main.js";
// let students : any[]= []
export async function student(selectedCourse) {
    let student = await inquirer.prompt([{
            name: "Fullname",
            type: "string",
            message: "Enter your full Name",
        }, {
            name: "Gender",
            type: "string",
            message: "Enter your Gender",
        },
        // {
        //     name: "Student Id",
        //     type: "number",
        //     message: "Student Id is",
        // },
        {
            name: "Phone number",
            type: "number",
            message: "Enter your phone number",
        }, {
            name: "selectedCourse",
            type: "string",
            message: "Selected Course",
            default: selectedCourse
        }, {
            name: "student Id",
            type: "string",
            message: "Selected Course",
            default: Math.floor(10000 * Math.random()),
        }
    ]);
    return student;
}
