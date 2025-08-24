// Importing modules
const express = require("express");

// Create server
const server = express();

// Middleware functions
function firstMiddleware(req, res, next) {
  console.log("First middleware hit.");
  next();
}
function secondMiddleware(req, res, next) {
  console.log("Second middleware hit.");
  next();
}

// Handling requests with middleware chain

//GET request
server.get("/", [firstMiddleware, secondMiddleware], (req, res) => {
  console.log("This is the get method.");

  return res.send("Home route after middleware chain.");
});

//POST request
server.post("/", (req, res) => {
  console.log("This is the post method.");
  return res.end("This is post request.");
});

//PUT request
server.put("/", (req, res) => {
  console.log("This is the put method.");
  return res.end("This is put request.");
});

//DELETE request
server.delete("/", (req, res) => {
  console.log("This is the delete method.");
  res.end("This is delete request.");
});
// Global (fallback) middleware
server.use((req, res) => {
  console.log("This is the fallback middleware [Global middleware].");
  res.end("This is the global middleware.");
});

// Listen to client requests
const PORT = 3300;

server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${3300}`);
});

