//in this lesson we will explore the events in node js
//http events
//create server
// Import the built-in 'http' module of Node.js
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check if request method is POST
  if (req.method === "POST") {
    let body = ""; // This will hold incoming request data

    // 'data' event fires whenever a new chunk of data comes from client
    req.on("data", (chunk) => {
      body += chunk.toString(); // Append chunk to body string
    });

    // 'end' event fires when all data is received
    req.on("end", () => {
      console.log("Raw body:", body); // Print raw body

      // Try parsing the body as JSON (if client sent JSON)
      try {
        const data = JSON.parse(body);
        console.log("Parsed JSON:", data); // Print parsed JSON object
      } catch (err) {
        console.log("Not valid JSON"); // If not valid JSON
      }

      // Send response back to client
      res.end("Data is received.");
    });
  } else {
    // For GET or other requests → send default response
    res.end("Welcome to Node js.");
  }
});

// Start the server on port 3100
server.listen(3100, () => {
  console.log("Server is listening at 3100.");
});
