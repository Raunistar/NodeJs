//importing the path module
import path from "path";

//creating a class and instance 
export default class ProductController {
  getProducts(req, res) {
    console.log(path.resolve());
    return res.sendFile(
      path.join(path.resolve(), "src", "views", "Products.html")
    );
  }
}
