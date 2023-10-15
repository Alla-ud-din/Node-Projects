#!/usr/bin/env node
import inquirer from "inquirer";
import { courses } from "./courses.js";
import { student } from "./student.js";
import showBanner from "node-banner";
import chalk from 'chalk';
(async () => {
    await showBanner('LMS', 'Welcome to Learning Management System of PIAIC');

let students : any[] = [{
    Fullname: "Alla Ud Din Ali Ahmad",
    Gender: "Male",
    "Phone number": +923335736624,
    selectedCourse: "Artificial intelligence",
    "student Id": Math.floor(100000*Math.random()),
},{
    Fullname: "Nasir Mehmood",
    Gender: "Male",
    "Phone number": +923345008680,
    selectedCourse: "Blockchain",
    "student Id": Math.floor(100000*Math.random()),
}];
async function main(){
let mainMenu = await inquirer.prompt ({
    name: "selectMenu",
    type: "list",
    message: "Please select your desire option",
    choices: ["New Registration", "Already a student", "Exit"]
})
if (mainMenu.selectMenu === "New Registration"){
    let selectedCourse = await inquirer.prompt ({
        name: "selectCourses",
        type: "list",
        message: "Select course",
        choices: ["Artificial intelligence" , "Cloud Native and Mobile Web Computing" , "Blockchain" , "Internet of Things"]
    })
    if (selectedCourse.selectCourses === "Artificial intelligence"){
        console.log(chalk.bgGreen.bold.gray(`\t\tCourse: ${courses[0]["Available Programs"]}`));
        console.table(courses[0]["Program Structure"]);
    }
    else if (selectedCourse.selectCourses === "Cloud Native and Mobile Web Computing"){
        console.log(chalk.bgGreen.bold.gray(`\tCourse: ${courses[1]["Available Programs"]}`));
        console.table(courses[1]["Program Structure"]);
    }
    else if (selectedCourse.selectCourses === "Blockchain"){
        console.log(chalk.bgGreen.bold.gray(`\t\tCourse: ${courses[2]["Available Programs"]}`));
        console.table(courses[2]["Program Structure"]);
    }
    else if (selectedCourse.selectCourses === "Internet of Things"){
        console.log(chalk.bgGreen.bold.gray(`\t\tCourse: ${courses[3]["Available Programs"]}`));
        console.table(courses[3]["Program Structure"]);
    }
    students.push(await student(selectedCourse.selectCourses))
    console.log(chalk.yellow("\t\tThanks for joining! You're officially in"));
    callback();
}
else if (mainMenu.selectMenu === "Already a student"){
    let student = await inquirer.prompt({
        name: "userInput",
        type: "list",
        message: "Select your desired action",
        choices: ["Student details", "Edit student details"]
    });
    if (student.userInput === "Student details"){
        let studentDetails = await inquirer.prompt({
            name: "selectStudent",
            type: "list",
            message: "Select Student",
            choices: students.map((student) => student.Fullname)
        })
        for (let i = 0; i<students.length; i++){
            if (students[i].Fullname == studentDetails.selectStudent ){
                console.log(students[i])
                break;
            }
        }
        callback();
    }
    else if (student.userInput === "Edit student details"){
        let studentDetails = await inquirer.prompt({
            name: "selectStudent",
            type: "list",
            message: "Select Student you want to edit",
            choices: students.map((student) => student.Fullname)
        })
        for (let i = 0; i<students.length; i++){
            if (students[i].Fullname == studentDetails.selectStudent ){
                const propertyToEdit = await inquirer.prompt({
                    name: "editProperty",
                    type: "list",
                    message: "Select a property to edit",
                    choices: Object.keys(students[i]),
                  });
                  if (propertyToEdit.editProperty === "selectedCourse"){
                  let newValue = await inquirer.prompt ({
                    name: "newPropertyValue",
                    type: "list",
                    message: `Select a new value for ${propertyToEdit.editProperty}`,
                    choices: ["Artificial intelligence" , "Cloud Native and Mobile Web Computing" , "Blockchain" , "Internet of Things"]
                })
                  }
                  else if (propertyToEdit.editProperty === "student Id"){
                    console.log("Sorry you can't edit Student Id")
                  }
                  else if (propertyToEdit.editProperty !== "selectedCourse" && propertyToEdit.editProperty !== "student Id"){
                    const newValue = await inquirer.prompt({
                        name: "newPropertyValue",
                        type: "input",
                        message: `Enter a new value for ${propertyToEdit.editProperty}`,
                      }); 
                    students[i][propertyToEdit.editProperty] = newValue.newPropertyValue;
                    console.log(chalk.green("Information updated"))
                  }

                //   console.log(students[i]);
                
                  break;
            }
        }
        callback();
    }
}
else if (mainMenu.selectMenu === "Exit"){
    (async () => {
        await showBanner('Good Bye', '\tThank you for visiting us');
    })();
}
}
main();
async function callback(){
    main()
}
})();