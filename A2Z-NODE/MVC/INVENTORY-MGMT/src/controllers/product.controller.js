import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  //to visit existing products
  getProducts(req, res) {
    let products = ProductModel.get();
    console.log(products);
    res.render("products", { products: products });
    // return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
  }
  //to add new products
  getAddForm(req, res) {
    return res.render("new-product", { errorMessage: null });
  }
  //after adding products redirect to products page
  addNewProduct(req, res) {
    //validate data
    const { name, price, imageUrl } = req.body;
    let errors = [];
    if (!name || name.trim() == "") {
      errors.push("Name is required.");
    }
    if (!price || parseFloat(price) < 1) {
      errors.push("Price must be at least 1.");
    }
    try {
      const validUrl = new URL(imageUrl);
    } catch (e) {
      errors.push("Invalid URL");
    }

    if (errors.length > 0) {
      return res.render("new-product", {
        errorMessage: errors[0],
      });
    }
    //access data from form
    console.log(req.body);
    ProductModel.add(req.body);
    let products = ProductModel.get();
    return res.render("products", { products: products });
  }
}
