import inquirer from "inquirer"
import { courses } from "./courses.js"
import { student } from "./student.js"
let students : any[] = [];
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
        console.log(`Course: ${courses[0]["Available Programs"]}`);
        console.table(courses[0]["Program Structure"]);
    }
    else if (selectedCourse.selectCourses === "Cloud Native and Mobile Web Computing"){
        console.log(`Course: ${courses[1]["Available Programs"]}`);
        console.table(courses[1]["Program Structure"]);
    }
    else if (selectedCourse.selectCourses === "Blockchain"){
        console.log(`Course: ${courses[2]["Available Programs"]}`);
        console.table(courses[2]["Program Structure"]);
    }
    else if (selectedCourse.selectCourses === "Internet of Things"){
        console.log(`Course: ${courses[3]["Available Programs"]}`);
        console.table(courses[3]["Program Structure"]);
    }
    students.push(await student(selectedCourse.selectCourses))
    console.log(students)
    callback();
}
else if (mainMenu.selectMenu === "Already a student"){
    let student = await inquirer.prompt({
        
    })
}
else if (mainMenu.selectMenu === "Exit"){
    console.log("Thank you for visiting us")
}
}
main();
async function callback(){
    main()
}
