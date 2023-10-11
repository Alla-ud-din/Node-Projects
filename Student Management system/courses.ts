
interface Course {
    Id: number,
    "Available Programs": string,
    "Program Structure": {
        "Quarter 1": string,
        "Quarter 2": string,
        "Quarter 3": string,
        "Quarter 4": string,
    }
}
export const courses : Course[]= [{
    Id: 1,
    "Available Programs": "Artificial intelligence",
    "Program Structure": {
        "Quarter 1" : "AI foundations",
        "Quarter 2" : "Introduction to Data Science & Deep Learning",
        "Quarter 3" : "Deploying AI solutions",
        "Quarter 4" : "AI in Practice"
    }
},{
    Id: 2,
    "Available Programs": "Cloud Native and Mobile Web Computing",
    "Program Structure": {
        "Quarter 1" : "Cloud Native Computing Foundations",
        "Quarter 2" : "Developing Cloud Native Microservices",
        "Quarter 3" : "Kubermetes in Practice",
        "Quarter 4" : "AWS Application Development"
    }
},{
    Id: 3,
    "Available Programs": "Blockchain",
    "Program Structure": {
        "Quarter 1" : "Foundations of Blockchain",
        "Quarter 2" : "Smart Contract Development",
        "Quarter 3" : "Dapp Development",
        "Quarter 4" : "Advanced Blockchain Topics"
    } 
},{
    Id: 4,
    "Available Programs": "Internet of Things",
    "Program Structure": {
        "Quarter 1" : "Introduction to IoT Concepts and Rust Programming",
        "Quarter 2" : "Embedded Rust and Real-time Systems Programming",
        "Quarter 3" : "Micro Services Development for IoT Edge and IoT Cloud using Web Assembly, Node.js, Docker and KubeEdge technologies",
        "Quarter 4" : "Voice Computing for Device Control"
    }
}]
// Create an array with only "Id" and "Available Programs" properties
const simplifiedCourses = courses.map(course => ({
    Id: course.Id,
    "Available Programs": course["Available Programs"]
  }));
  // Display the simplified array in table form
  console.table(simplifiedCourses);
// courses.forEach((course) => {
//     console.log(`Course: ${course["Available Programs"]}`);
//     console.table(course["Program Structure"]);
//   });