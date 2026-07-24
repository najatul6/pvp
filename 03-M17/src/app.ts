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

// Create Note Endpoint
app.post("/note/create-note", async (req: Request, res: Response) => {
  const body=req.body
  const note= await Note.create(body)

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note
  })
})

// Get All Notes Endpoint
app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(200).json({
    success: true,
    message: "Notes retrieved successfully",
    notes
  });
});

// Get Single Note Endpoint
app.get("/note/:id", async (req: Request, res: Response) => {
  const noteId=req.params.id
  const note = await Note.findById(noteId);

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "Note retrieved successfully",
    note
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Note App');
});

export default app