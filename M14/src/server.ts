import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { client } from "./config/mongoDB";

let server;

const port = process.env.PORT || 5000;



const bootstrap=async()=>{
    await client.connect();
    console.log("Connected to Mongodb")
    server= app.listen(port, ()=>{
    console.log(`App listing from ${port}`)
})
}

bootstrap()