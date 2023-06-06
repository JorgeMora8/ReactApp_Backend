import ProductRepository from "./ProductRepository.js"
import { ProductDAO } from "../../Database/MongoDBContainer.js"
import { Product } from "./Product.js"
import {v4 as uuid4} from "uuid"
import { checkUniqueProductName } from "./Validation/CheckUniqueProduct.js"

export class ProductService { 
    constructor(){ 
        this.repository = new ProductRepository(ProductDAO)
    }

    async getAllProducts(){ 
        const productList = await this.repository.getAll()
        return productList.map(product => product.asDTO())
    }

    async save(productData){ 

        await checkUniqueProductName(productData['name'])
        productData['id'] = uuid4()
        const newProduct = new Product(productData)
        await this.repository.save(newProduct)
    }

    async getByName(productName){ 
        const products = await this.repository.getByName(productName)
        return products.map((product) => product.asDTO())
    }

    async getByCategory(category){ 
        const products = await this.repository.getByCategory(category)
        return products.map(product => product.asDTO())
    }

    async getByBrand(productBrand){ 
        const products = await this.repository.getByBrand(productBrand)
        return products.map(product => product.asDTO())
    }

    async updateProduct(productId, productData) {
        const productUpdated = await this.repository.updateProduct(productId, productData)
        return productUpdated
    }

    async getLowerPrice(quanity){ 
        const products = await this.repository.getLowerPrice(quanity)
        return products.map(product => product.asDTO())
    }

    async getById(productId){ 
        const product = await this.repository.getById(productId)
        return product.asDTO()
    }
    async delete(productId){ 
        await this.repository.deleteProduct(productId)
    }
}

//INSTANCE OF THE PRODUCT-SERVICE
export const productService = new ProductService()