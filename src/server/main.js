const express = require("express");
const ViteExpress = require("vite-express");


const app = express();

app.use(express.json());

ViteExpress.config({ mode: "production" })

let serverCount = 0; // Server-side count
let serverName = ''; // Server-side name

app.post('/', (req, res) => {
  const { user } = req.body;
  serverCount = user; // Update the server-side count
  console.log(`now logged successfully: ${user}`);
  res.send( user );
});



ViteExpress.listen(app, 5173, () =>
  console.log("Server is listening on port 5173...")
);
