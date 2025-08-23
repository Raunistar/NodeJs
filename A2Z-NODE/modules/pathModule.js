//importing path module
const fs = require("fs");
const path = require("path");

//Reading data
const filePath = path.join("src", "data", "employee.txt"); //provides relative path starts from current directory
const pathResolved = path.resolve("src", "data", "employee.txt"); //provides absolute path from root directory to current file
console.log(filePath);
console.log(pathResolved);

//reading data
const data = fs.readFileSync(filePath).toString();
console.log(data);
