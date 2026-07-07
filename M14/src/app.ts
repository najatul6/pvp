import express, {Application, Response, Request} from "express"
import {todosRouter} from "./app/todos/todos.routes"
const app : Application = express()


app.use(express.json())

app.use("/todos", todosRouter)


app.get("/", (req : Request, res : Response)=>{
    res.send("Hello, World!")
})



export default app;