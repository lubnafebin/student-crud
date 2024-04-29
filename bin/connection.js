//initailize mongoclient fron mongodb
const { MongoClient } =require("mongodb")
//initail db config
let db = {state:null}
//export main
module.exports.connection= async ()=>{
    try {
        const uri ="mongodb://127.0.0.1:27017"
        const database ="college"
        const client = new MongoClient(uri)
        await client.connect()
        db.state = client.db(database)
        console.log("Database connected succussfully")
    } catch (error) {
        console.error(error)
    }
}
module.exports.get = () => db.state