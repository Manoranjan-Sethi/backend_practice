const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.write("Hello ");
  res.end("World!");
});

app.get("/products", (req, res) => {
  res.end(JSON.stringify({ a: "a", b: "b" }));
});

app.post("/products", (req, res) => {
  // write body in db.json

  res.end("got data");
});

app.listen(8090, () => {
  console.log("Server running on port 8090");
});
