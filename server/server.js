const express = require('express');
const app = express();
const PORT = 4001; // Change to any port you prefer

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
