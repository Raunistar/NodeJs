//creating server and importing modules / library
const http = require("http");
const fs = require("fs");

//using createServer()
const server = http.createServer((req, res) => {
  //to reading html as a response we will use readFilesync in this lesson
  const data = fs.readFileSync("./index.html").toString();
  //here comes the request

  res.end(data);
});
//now listen to a port for client's request
server.listen("3100", () => {
  console.log("Server is listening at port 3100.");
});
