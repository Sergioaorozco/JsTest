const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const user = req.headers["user-agent"];
  res.send(user);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
