const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3001;
const apiData = require("./userapi.json");

app.get("/", (req, res) => {
  res.send("Fake User Info Data Api");
});

app.get("/users", (req, res) => {
  res.send(apiData);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on ${port}`);
});
