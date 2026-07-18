import dotenv from "dotenv";
dotenv.config();
import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

let server;
console.log("URI:", process.env.MONGODB_URI);
const port = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env file");
}
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
    console.log("Connected to Mongodb")
    server= app.listen(port, ()=>{
    console.log(`App listing from ${port}`)
})
}

bootstrap()