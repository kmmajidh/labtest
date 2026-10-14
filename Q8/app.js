// Server Setup (15 Marks)
const http = require('http');

const server = http.createServer((req, res) => {
    // Sending HTML (20 Marks)
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send the HTML string
    res.write("<h1>Welcome to my Node.js Server!</h1><p>This is my exam.</p>");
    
    // End the response
    res.end();
});

// Listening to Port (15 Marks)
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});