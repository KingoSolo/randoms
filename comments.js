// Create web server
const express = require('express');
const app = express();

// Create a middleware function
app.use((req, res, next) => {
  console.log('This is my first middleware function!');
  next();
});

app.use((req, res, next) => {
  console.log('This is my second middleware function!');
  next();
});

// Create a route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});