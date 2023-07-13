const express = require("express");
const ViteExpress = require("vite-express");


const app = express();

app.use(express.json());

let serverCount = 0; // Server-side count
let serverName = ''; // Server-side name

app.post('/api/logCount', (req, res) => {
  const { user } = req.body;
  serverCount = user; // Update the server-side count
  console.log(`now logged successfully: ${user}`);
  res.send('Count now logged successfully!');
});



ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);