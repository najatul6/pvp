import { Server } from 'http'
import app from './app.js';

let server: Server;
const PORT = 5000

async function main() {
    try {
        server = app.listen(PORT, () => {

            console.log(`App listening on port ${PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}

main()