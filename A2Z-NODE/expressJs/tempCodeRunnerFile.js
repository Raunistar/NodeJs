//middleware as function and global middleware

// importing modules
const express = require("express");

//create server
const server = express();

//middleware as function while handling the requests
function firstMiddleware(req, res, next) {
  console.log("First middleware hit.");
  next();
}
function secondMiddleware(req, res, next) {
  console.log("Second middleware hit.");
  next();
}
//handling requests
server.get("/", [firstMiddleware, secondMiddleware]);
//global middleware
server.use((req, res, next) => {
  res.end("This is the global middleware.");
});

//listen to the clients request using port
server.listen(3100, () => {
  console.log(`Server is listening at port ${3100}.`);
});
