import express, { Request, Response } from "express";
import fs from "fs";
import { client } from "../../config/mongoDB";
import { ObjectId } from "mongodb";

export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todoDB")
  const collection = await db.collection("todos")
  const todos = await collection.find({}).toArray();
  res.status(200).json(todos);
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const db = await client.db("todoDB")
  const collection = await db.collection("todos")
  const { title, description, priority, isCompleted } = req.body;
  await collection.insertOne({ title, description, priority, isCompleted: false });
  res.status(201).json({ message: "Todo created successfully" });
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todoDB")
  const collection = await db.collection("todos")
  const todo = await collection.findOne({ _id: new ObjectId(id) })
  res.json(todo);
});

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, description, priority, isCompleted } = req.body;
  const db = await client.db("todoDB");
  const collection = await db.collection("todos");
  const filter = { _id: new ObjectId(id) };
  await collection.updateOne(
    filter,
    { $set: { title, description, priority, isCompleted } },
    { upsert: true }
  );
  res.json({ message: "Todo updated successfully" });
});

todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todoDB");
  const collection = await db.collection("todos");
  await collection.deleteOne({ _id: new ObjectId(id) });
  res.json({ message: "Todo deleted successfully" });
});