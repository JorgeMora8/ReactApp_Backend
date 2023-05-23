import { productService } from "../ProductService.js";

//ENSURE UNIQUE NAME FOR EACH PRODUCT
export async function checkUniqueProductName(productName){ 
    const productsSaved = await productService.getAllProducts()

    let productFound = productsSaved.find((product) => product.name === productName)
    if(productFound) throw new Error("ERROR: PRODUCT WITH THIS NAME ALREADY REGISTER")
}