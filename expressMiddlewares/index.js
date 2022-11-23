const express = require("express");
const productRouter = require("./routes/products.routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.write("Hello ");
  res.end("World!");
});

app.use(productRouter);

app.listen(8090, () => {
  console.log("Server running on port 8090");
});
