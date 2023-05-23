import { Product } from "./Product.js"
import { checkProductExits } from "./Validation/productExits.js"

export default class ProductRepository { 
    constructor(dao){ 
        this.dao = dao
    }

    async save(newProduct){ 
        await this.dao.save(newProduct.asDTO())
    }

    async getAll(){ 
        const productList = await this.dao.getAll()
        return productList.map(product => new Product(product))
    }

    async getByName(productName){ 
        const productDB = await this.dao.getByName(productName)
        const product = new Product(productDB)
        return product
    }

    async getById(productId){ 
        let product = await this.dao.getById(productId)
        if(!product) throw new Error(`PRODUCT WITH ID ${productId} DOESNT EXITS`)
        product = new Product(product)
        return product
    }

    async getByCategory(category){ 
        const products = await this.dao.getByCategory(category)
        if(products.length == 0) throw new Error(`PRODUCTS WITH CATEGORY ${category} DOESNT EXITS`)
        return products.map(product => new Product(product))
    }

    async getByBrand(productBrand){ 
        const products = await this.dao.getByBrand(productBrand)
        if(products.length == 0) throw new Error(`PRODUCTS FROM BRAND ${productBrand} DOESNT EXITS`)
        return products.map(product => new Product(product))
    }

    
    async updateProduct(id, product){ 
        await checkProductExits(id)
        await this.dao.updateProduct(id, product)
    }

    async deleteProduct(id){ 
                //Create a function that check that the product exits
        await this.dao.deleteById(id)
    }
}