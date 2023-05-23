import express from "express"
import cors from "cors"
import { ProductRouter } from "../Routes/Products.js"

//EXPRESS APLICATION
export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/products", ProductRouter)

