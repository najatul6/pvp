import { Server } from 'http'
import app from './app'

let server : Server
const port = 5000

async function main() {
    try {
        server = app.listen(port, () => {
            console.log(`App is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()