import {config} from "dotenv"

config()

export const MONGODB_CLOUD_URI = process.env.MONGODB_CLOUD_URI
export const PORT = process.env.PORT || 8080