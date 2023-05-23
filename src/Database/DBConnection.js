import mongoose from "mongoose"
import { MONGODB_CLOUD_URI } from "../Config/envVariables.js"

export function DBConnection(){ 
    try{
        mongoose.connect(MONGODB_CLOUD_URI)
     }catch(err){ 
        setTimeout(() => {
            DBConnection()
        }, 4000);
     }
}