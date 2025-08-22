//creating a http server using node js
//import http library/module
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  //handling multiple requests
  if (req.url === "/product") {
    return res.end("Welcome to product url page."); // or we can use write function if have multiple request and doesn't want to end the response.
  } else if (req.url === "/favicon.ico") {
    return res.end("Welcome to favicon page.");
  }
  //here comes the request
  res.end("Welcome to node js HTTP server.");
});

//specify a port to listen to client's requests.
server.listen(3000, () => {
  console.log("Server is listening at port 3000.");
});
// console.log("Server is listening at port 3000.");
