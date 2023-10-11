import inquirer from "inquirer"
import { courses } from "./courses.js"
import { student } from "./student.js"
let mainMenu = await inquirer.prompt ({
    name: "selectMenu",
    type: "list",
    message: "Please select your desire option",
    choices: ["Student Information", "Available Courses", "Exit"]
})
if (mainMenu.selectMenu === "Student Information"){
    student();
}
else if (mainMenu.selectMenu === "Available Courses"){}
else if (mainMenu.selectMenu === "Exit"){}
let menu = await inquirer.prompt ({
    name: "selectCourses",
    type: "list",
    message: "Select course",
    choices: ["Artificial intelligence" , "Cloud Native and Mobile Web Computing" , "Blockchain" , "Internet of Things"]
})
if (menu.selectCourses === "Artificial intelligence"){
    console.log(`Course: ${courses[0]["Available Programs"]}`);
    console.table(courses[0]["Program Structure"]);
}
else if (menu.selectCourses === "Cloud Native and Mobile Web Computing"){
    console.log(`Course: ${courses[1]["Available Programs"]}`);
    console.table(courses[1]["Program Structure"]);
}
else if (menu.selectCourses === "Blockchain"){
    console.log(`Course: ${courses[2]["Available Programs"]}`);
    console.table(courses[2]["Program Structure"]);
}
else if (menu.selectCourses === "Internet of Things"){
    console.log(`Course: ${courses[3]["Available Programs"]}`);
    console.table(courses[3]["Program Structure"]);
}
export interface studentProfile {
    Fullname: string
    Gender: string,
    "Student ID": number
    "Phone number": number,
}
