const express = require("express");

const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.write("Hello ");
  res.end("World!");
});

//reading products
app.get("/products", (req, res) => {
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    res.end(data);
  });
});

//adding products
app.post("/products", (req, res) => {
  // write body in db.json
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parse = JSON.parse(data); // converting data as strings to valid JSON objects
    parse.products = [...parse.products, req.body]; //adding new products to the array

    fs.writeFile(
      "./db.json",
      JSON.stringify(parse),
      { encoding: "utf8" },
      () => {
        res.end("New data added");
      }
    );
  });
});

//update products
app.put("/products/:id", (req, res) => {
  // write body in db.json
  const { id } = req.params;
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parse = JSON.parse(data);
    parse.products = parse.products.map((el) => el.id == id);

    fs.writeFile(
      "./db.json",
      JSON.stringify(parse),
      { encoding: "utf-8" },
      () => {
        res.end("New data added");
      }
    );
  });
});

//delete products
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parse = JSON.parse(data);
    parse.products = parse.products.filter((el) => el.id !== id);

    fs.writeFile(
      "./db.json",
      JSON.stringify(parse),
      { encoding: "utf-8" },
      () => {
        res.status(201).end("Product Deleted");
      }
    );
  });
});

app.listen(8090, () => {
  console.log("Server running on port 8090");
});
