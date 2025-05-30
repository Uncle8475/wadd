// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from "public" directory
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
