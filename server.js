// server.js
const express = require('express');
const app = express();

// Middleware to parse JSON

app.get('/' , (req,res) => {
    res.send("hello rootnode")

});

// Import route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

// Use routes
app.use('/users', usersRoute);
app.use('/products', productsRoute);

// Define a port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
