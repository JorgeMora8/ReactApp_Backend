import {productModel} from "../Database/DBSchema.js"
import { DBConnection } from "./DBConnection.js"

DBConnection()

export default class DAO{ 
    constructor(model) {
        this.model = model
    }

    async save(data) {         
        await this.model.create(data)
    }

    async getAll() { 
        return await this.model.find({}, {_id:0, __v:0}).lean()
    }

    async getById(id) { 
        const item = await this.model.findOne({id:id}, {_id:0, __v:0})
        return item    
    }

    async getByName(productName) { 
        const item = await this.model.find( { $text: { $search: productName } } )
        return item    
    }

    async getByCategory(category){ 
        const products = await this.model.find({category:category}, {_id:0, __v:0})
        return products
    }

    async getByBrand(productBrand){ 
        const products = await this.model.find({brand:productBrand}, {_id:0, __v:0})
        return products
    }

    async deleteById(id){ 
        return await this.model.deleteOne({id: id})
    }

    async deleteAll(){ 
        await this.model.deleteMany()
    }

    async updateProduct(id, productInfo){ 
        const {name, price, units, category, image, brand,description } = productInfo
        const productUpdated = await this.model.updateOne({id:id}, {$set:{name, price, units, category, image, brand, description}})
        return productUpdated
    }


    async deleteProduct(productId) { 
        await this.model.deleteOne({id:productId})
    }
}

export const ProductDAO = new DAO(productModel)