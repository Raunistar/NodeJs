//importing express module and creating server
import path from "path";
import express from "express";
import ProductController from "./src/controllers/product.controller.js";

const server = express();
//setup the view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

//create an instance of ProductController

const productController = new ProductController();
server.get("/", productController.getProducts);
server.use(express.static("src/views"));
server.listen(3400);
console.log("Server is listening at port 3400.");
