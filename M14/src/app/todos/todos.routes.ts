import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../../config/mongoDB";
import { ObjectId } from "mongodb";

const filePath = path.join(__dirname, "../../../db/db.json");
export const todosRouter = express.Router();

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf8" });
  console.log("From todos Router");
  res.json({
    message: "From todos Router",
    data,
  });
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const db = await client.db("todoDB")
  const collection = await db.collection("todos")
  const { title, description,priority } = req.body;
  await collection.insertOne({ title, description, priority });
  res.status(201).json({ message: "Todo created successfully" });
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = await client.db("todoDB")
  const collection = await db.collection("todos")
  const todo = await collection.findOne({ _id: new ObjectId(id) });
  res.json({ todo });
});

todosRouter.put("/update-todo/:id", async(req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, priority } = req.body;
  const db = await client.db("todoDB");
  const collection = await db.collection("todos");
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: { title, description, priority } });
  res.json({ message: "Todo updated successfully" });
});

todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {
  const { title } = req.body;
  console.log("Delete todo")
  res.send("Todo deleted!")
})