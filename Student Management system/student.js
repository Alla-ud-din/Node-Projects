import inquirer from "inquirer";
let students = [];
export async function student() {
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
        }]);
    students.push(student);
}
// console.log(students[0]);
// console.log(student1[0])
// Fullname:  promptSync("Enter your Full Name.. "), 
// Gender: promptSync("Enter your Gender.. "),
// "Student ID": 10000*Math.random(),
// "Phone number": promptSync("Enter your Birth Day.. "),
// console.log(student1);
