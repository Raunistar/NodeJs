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
    return res.render("new-product");
  }
  //after adding products redirect to products page
  addNewProduct(req, res) {
    //access data from form
    console.log(req.body);
    let products = ProductModel.get();
    res.render("products", { products: products });
  }
}
