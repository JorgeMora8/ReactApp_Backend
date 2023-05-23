import {mongoose} from "mongoose"


//PRODUCT SCHEMA
const productSchema = new mongoose.Schema({ 
    id: {type:String, required: true}, 
    name: {type:String, required:true}, 
    category: {type:String, required:true}, 
    brand:{type:String, required:true},
    price:{type:Number, required:true},
    units:{type:Number, required:true}, 
    image:{type:String, required:true}, 
    description:{type:String, required:true}
})


export const productModel = mongoose.model("products", productSchema)