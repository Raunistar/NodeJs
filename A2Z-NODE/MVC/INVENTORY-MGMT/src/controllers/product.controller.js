//importing the path module
import path from "path";
import ProductModel from "../models/product.model.js";
//creating a class and instance
export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    console.log(products);
    res.render("products", { products: products });
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "Products.ejs")
    // );
  }
}
