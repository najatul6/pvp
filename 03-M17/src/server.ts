import { Server } from 'http'
import app from './app'
import mongoose from 'mongoose';
import envConfig from './config/envConfig';

let server : Server

async function main() {
    try {
        await mongoose.connect(`${envConfig.database_url}`);
        console.log("Connect to MongoDB")
        server = app.listen(envConfig.port, () => {
            console.log(`App is listening on port ${envConfig.port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()