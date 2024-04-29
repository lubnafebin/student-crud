const httpServer = require("http")
const app = require("./app")
const {connection}=require("./bin/connection")
async function startServer() {
    try {
        const port = 3000
        const server = httpServer.createServer(app)
         await connection()
        
        server.listen(port, function () {
            console.log("server connected on the port :", port)
        })

    } catch (error) {
        console.error("connection failed", error)
    }
}
startServer()