import { productService } from "../ProductService.js";

export async function checkProductExits(productID){ 
    await productService.getById(productID)
}