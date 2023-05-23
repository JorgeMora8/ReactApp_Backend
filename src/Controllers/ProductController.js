import { productService } from "../ApiArquitecture/Products/ProductService.js"

export async function getProducts(req, res){ 
    try{
        const products = await productService.getAllProducts()
        res.status(200).send(products)
    }   catch(err){ 
        res.status(400).json({"ERROR":`${err.message}`})
    }
}

export async function getByCategory(req, res) {

    try{ 
        const CategoryParams = req.params.category
        const productCategoryQuery = CategoryParams.replace("-", " ");
        const productList = await productService.getByCategory(productCategoryQuery)
        res.status(200).send(productList)
    }   catch(error){ 
        res.status(400).json({"ERROR":`${error.message}`})
    }
}

export async function getByBrand(req, res){ 
    try{ 
        const productBrand = req.params.brand; 
        const productList = await productService.getByBrand(productBrand)
        res.status(200).send(productList)
    }catch(err){ 
        res.status(400).json({"ERROR":`${err.message}`})
    }
}


export async function addProduct(req, res) { 
        try{ 
            await productService.save(req.body)
            res.status(201).json({"MESSAGE":"SUCCESS", 
                                   "STATE":"PRODUCT ADDED SUCCEFULLY"})
        }   catch(error){ 
            res.status(400).json({"ERROR":`${error.message}`})
        }
}

export async function updateProduct(req, res) { 
    try{
        const ProductId = req.params.id
        const newProductInfo = req.body
        const product = await productService.updateProduct(ProductId, newProductInfo)
        res.status(201).json({ 
        Success:"Product updated", 
        product
    })
    }   catch(error){ 
        res.status(400).json({"ERROR":`${error.message}`})
    }
}

export async function deleteProduct(req, res){ 
    try{
        await productService.delete(req.params.id)
        res.status(204).json({Success:`The product #${req.params.id} was deleted succesfully`})
    }   catch(error){ 
        res.status(400).json({"ERROR":`${error.message}`})
    }
}

export async function getProductById(req, res){ 
    try{
        const product = await productService.getById(req.params.id)
        res.status(200).send(product)
    }   catch(error){ 
        res.status(400).json({"ERROR":`${error.message}`})
    }
}