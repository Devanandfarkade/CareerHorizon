const express = require('express');
const bodyParser = require('body-parser');
require('colors'); 
const { connectDB } = require('./config/db'); 
const userRoutes = require('./routes/userRoutes'); 
require('dotenv').config(); 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); 

// Serve register.html on root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/register.html'); 
});

// Connect to MongoDB
connectDB();

// Use user registration and login routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Your Server running on port `.green + `${PORT}`.yellow);
    console.log(`Visit: `.blue + `http://localhost:${PORT}`.cyan.underline);
});
