//importing module
const fs = require("fs");

//Reading data
fs.readFile("module.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
console.log("This is another operation being performed.");
//write data
fs.writeFile("employee.txt", "New Employee", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is written successfully.");
  }
});
// to append and update a file
fs.appendFile("employee.txt", "\nanother employee", (Err) => {
  if (Err) {
    console.log(Err);
  } else {
    console.log("File is updated.");
  }
});

// to delete the file
fs.unlink("employee.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted successfully.");
  }
});
