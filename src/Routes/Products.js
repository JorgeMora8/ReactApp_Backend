import { Router } from "express";
import { 
    getProducts, 
    getByCategory, 
    getProductById, 
    addProduct, 
    updateProduct, 
    deleteProduct,
    getByBrand,
    getProductSearch
 } from "../Controllers/ProductController.js";


export const ProductRouter = Router()

ProductRouter.get("/", await getProducts)
ProductRouter.get("/:id", await getProductById)
ProductRouter.get("/category/:category", await getByCategory)
ProductRouter.get("/brand/:brand", await getByBrand)
ProductRouter.get("/search/:productName", await getProductSearch)
ProductRouter.post("/", await addProduct)
ProductRouter.put("/:id", await updateProduct)
ProductRouter.delete("/:id", await deleteProduct)