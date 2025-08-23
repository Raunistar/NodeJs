//file system module
const fs = require("fs");

//read file content using blocking code'
console.log("Starting to read");
// const buffer = fs.readFileSync("./module.txt").toString(); // reading file and convert buffer data into string format

//another way to read data in formatted way
const buffer = fs.readFileSync("./module.txt", { encoding: "utf-8" });
console.log(buffer); //reading data

//creating and writing a file
try {
  fs.writeFileSync("employee.txt", "Name:Raunistar,Age:24,position:Dev");
} catch (error) {
  console.log(error);
}

//how to append some data to existing file
fs.appendFileSync("employee.txt", "/nName:Grace,Age:23,position:DA");

//to delete a file
try {
  fs.unlinkSync("employee.txt");
} catch (error) {
  console.log("File doesn't exist.");
}
console.log("This is another function being performed");
