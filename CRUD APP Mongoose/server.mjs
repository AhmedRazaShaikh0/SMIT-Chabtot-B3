import express from "express";
import Products from "./Model/Products.mjs";
import connectDB from "./Database/Connection.mjs";
import path from "path";
const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 3000;

// Data Format
// {
//     "id": 4,
//     "name": "Raza",
//     "fathername": "Imtiaz",
//     "age": 22,
//     "gender": "Male"
//   }

connectDB();
app.use(express.json());

// let products = [
//   {
//     id: 1,
//     name: "Men's Shirt",
//     price: "Rs 5000",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum beatae quos commodi quis eos, suscipit voluptatibus incidunt, aperiam vero ut aut esse soluta atque nesciunt eius quisquam fugit repellendus iure?",
//   },
//   {
//     id: 2,
//     name: "Kid's Shirt",
//     price: "Rs 2000",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum beatae quos commodi quis eos, suscipit voluptatibus incidunt, aperiam vero ut aut esse soluta atque nesciunt eius quisquam fugit repellendus iure?",
//   },
// ];


// app == route
// "/" = path
// (req, res) => {
// res.send("Hello From Root Path");
// }); ==  middleware function

app.get("/testing", async (req, res) => {
  res.send("Hello From Root Path");
});

//GET All Products
app.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.send({
      message: "All Products",
      Products: products,
    });
  } catch (error) {
    res.status(500).send("Error retrieving products");
  }
});

// GET
app.get("/product/:id", async (req, res) => {
  try {
    const product = await Products.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).send({
        message: "Product not found",
      });
    }
    res.send({ product });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving product");
  }
});

// POST
app.post("/product", async (req, res) => {
  try {
    const { id, name, fathername, age, gender } = req.body;
    const product = new Products({ id, name, fathername, age, gender });
    await product.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create product" });
  }
});

// PUT/UPDATE
app.put("/product/:id", async (req, res) => {
  try {
    const product = await Products.findOneAndUpdate(
      { id: req.params.id },
      {
        name: req.body.name,
        fathername: req.body.fathername,
        age: req.body.age,
        gender: req.body.gender,
      },
      { new: true }
    );
    if (!product) {
      return res.status(404).send({
        message: "Product not found",
      });
    }
    res.send({
      message: `Product is updated with id: ${product.id}`,
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating product");
  }
});

// DELETE
app.delete("/product/:id", async (req, res) => {
  try {
    const product = await Products.findOneAndDelete({ id: req.params.id });
    if (!product) {
      return res.status(404).send({
        message: "Product not found",
      });
    }
    res.send({
        message: `Product deleted with id: ${product.id}`,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting product");
  }
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
