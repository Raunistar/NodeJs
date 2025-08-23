//express server in nodejs

const express = require("express");
//create server
const server = express();

//listen for the default requests

server.use("/", (req, res) => {
  res.send("Welcome to Express server.");
}); //use to handle all kind of the requests

//listen to the requests

server.listen(3100, () => {
  console.log("Server is listening at port 3100.");
});
/*
other ways to handle requests are :-
1. server.get("path",(req,res)=>{
res.send("msg")
});

2. server.post("path",(req,res)=>{
res.send("msg")
});

3. server.put("path",(req,res)=>{
res.send("msg")
});

 */
