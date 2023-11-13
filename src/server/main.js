const express = require("express");
const ViteExpress = require("vite-express");
require("dotenv").config();


const app = express();

app.use(express.json());

console.log(process.env.VITE_botName)

let serverCount = 0; // Server-side count
let serverName = ''; // Server-side name

const activeUsers = new Set();

app.post('/api/home', (req, res) => {
  const { user } = req.body;
  activeUsers.add(user); // Add the user to the active users list
  res.send(`now logged successfully! ${user}`);
});

setInterval(() => {
  console.log(`Active users: ${Array.from(activeUsers).join(', ')}`);
}, 3000); // Log active users every 3 seconds

app.post('/api/heartbeat', (req, res) => {
  const { user } = req.body;
  if (activeUsers.has(user)) {
    activeUsers.add(user); // Refresh the user's "heartbeat"
  }
  res.send('Heartbeat received!');
});

app.post('/api/leave', (req, res) => {
  const { user } = req.body;
  activeUsers.delete(user); // Remove the user from the active users list
  res.send(`User ${user} has left.`);
});


ViteExpress.listen(app, 5173, () =>
  console.log("Server is listening on port 5173...")
);
