import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose';

const app: Application = express();
app.use(express.json());

const noteSchema = new Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, default: '' },
  category: {
    type: String,
    enum: ["Work", "Personal", "Ideas", "Others"],
    default: "Personal"
  },
  pinned: {
    type: Boolean,
    default: false
  },
  tags:{
    label:{type: String, required: true},
    color:{type: String, default:'#727272'}
  }
});

const Note = model('Note', noteSchema);

app.post("/note/create-note", async (req: Request, res: Response) => {
  const body=req.body
  const note= await Note.create(body)

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note
  })
})

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Note App');
});

export default app