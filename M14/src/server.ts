import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

let server;
const port = 5000

const uri = "mongodb+srv://todosApp:XAIEbUd59WD0kzkh@postofsale.2psjhl2.mongodb.net/todosDB?appName=PostOfSale";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const bootstrap=async()=>{
    await client.connect();
    console.log("Connected to mongodb")
    server= app.listen(port, ()=>{
    console.log(`App listing from ${port}`)
})
}

bootstrap()