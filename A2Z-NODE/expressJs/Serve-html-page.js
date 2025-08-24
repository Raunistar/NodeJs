// Importing modules
const path = require("path");  // ✅ Needed for path.join
const express = require("express");

// Create server
const server = express();

//serving static files using built in middleware of express js called static

server.use(express.static(path.join(__dirname, "public")));//serves static files[html,css,cdn,bootstrap]

server.get("/", (req, res) => {
  res.send("Welcome to express.");
});

server.listen(3400, () => {
  console.log("Server is listening at port 3400.");
});
