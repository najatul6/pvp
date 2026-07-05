import express, {Application, Response, Request} from "express"

const app : Application = express()


app.get("/", (req : Request, res : Response)=>{
    res.send("Hello, World!")
})

app.get("/todos", (req : Request, res : Response)=>{
    console.log(req.query)

})

app.post("/todos/createTodo", (req : Request, res : Response)=>{
    res.send("Todo created")
})

export default app; 