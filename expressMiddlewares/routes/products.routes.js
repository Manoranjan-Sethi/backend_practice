const { Router } = require("express");

const productRouter = Router();
const fs = require("fs");

productRouter.get("/products", (req, res) => {
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    res.end(data);
  });
});

//adding products
productRouter.post("/products", (req, res) => {
  // write body in db.json
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parse = JSON.parse(data); // converting data as strings to valid JSON objects
    parse.products = [...parse.products, req.body]; //adding new products to the array

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

//update products
productRouter.put("/products/:id", (req, res) => {
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
productRouter.delete("/products/:id", (req, res) => {
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

module.exports = productRouter;
