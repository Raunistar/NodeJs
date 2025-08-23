//express server in nodejs

const express = require("express");
//create server
const server = express();

//listen for the default requests
//in middleware order matters
server.get(
  "/",
  //first middleware
  (req, res, next) => {
     console.log("This is from first middleware.");
    next();
  },
  //2nd middleware
  (req, res) => {
    res.send("Welcome to Express server.");
  }
); //use to handle all kind of the requests

//listen to the requests

server.listen(3100, () => {
  console.log("Server is listening at port 3100.");
});
