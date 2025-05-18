import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controller/product.controller.js";

const router = express.Router()

//getAll products
router.get("/", getAllProducts);

//GetOne
router.get("/:id", getProduct)

//post product
router.post("/", createProduct);

//update product
router.put("/:id", updateProduct);

//delete 
router.delete("/:id", deleteProduct);


export default router;