const express = require('express');
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Middleware1  ${req.method} ${req.url}`);
  next();
});

// Sample data
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// Route to get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to add a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
