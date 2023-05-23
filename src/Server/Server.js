import http from "http"
import {app} from "./App.js"

export default async function InitializeServer(port){ 
    const httpServer = await http.createServer(app)
    const server = await httpServer.listen(port, ()=>{ 
        console.log(`SERVER RUNNING AT: http://localhost:${port}`)
    })

    server.on("error", (error)=>{ 
        console.log(error)
    })
}