//initialize mongoClient from mongodb
const { MongoClient } = require("mongodb");
//initial db config
let db = { state: null };
//export main
module.exports.connection = async () => {
  try {
    const uri = process.env.URI;
    const database = "college";
    const client = new MongoClient(uri);
    await client.connect();
    db.state = client.db(database);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(error);
  }
};
module.exports.get = () => db.state;
