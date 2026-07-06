import express, {Application, Response, Request} from "express"
import fs = require("fs")
import path from "path"


const app : Application = express()
app.use(express.json())

const filePath=path.join(__dirname,"../db/db.json")

app.get("/", (req : Request, res : Response)=>{
    res.send("Hello, World!")
})

app.get("/todos", (req : Request, res : Response)=>{
    console.log(req.query)
    const data = fs.readFileSync(filePath, "utf8")
    res.json(data)
})

app.post("/todos/createTodo", (req : Request, res : Response)=>{
    const {title,body} = req.body
    console.log(req.body)
    res.send("Todo created!")
})

export default app; 