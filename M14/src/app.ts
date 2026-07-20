import express, { Application, Response, Request, NextFunction } from "express"
import { todosRouter } from "./app/todos/todos.routes"
import e from "express"
const app: Application = express()


app.use(express.json())

app.use("/todos", todosRouter)


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log({
        url: req.url,
        method: req.method,
        header: req.header,
        body: req.body
    })
    next()
},

    async (req: Request, res: Response) => {
        try {
            res.send("Welcome to the API")

        } catch (error) {
            console.log(error)
            res.status(500).send("Internal Server Error")
        }
    })

app.get("/error",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.send("Welcome to the API")

        } catch (error) {
            console.log(error)
            res.status(500).send("Internal Server Error")
        }
    })

app.use( (req: Request, res: Response,next: NextFunction) => {
    res.status(404).json({
        message: "Route not found"
    })
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error){
        console.error(error)
        res.status(500).send("Internal Server Error from global error handler")
    }
})




export default app;