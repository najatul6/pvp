import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

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

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("Todo created!");
});
