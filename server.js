const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Server is up");
});

app.listen(4003, () => {
  console.log("Listening to port 4003...");
});
