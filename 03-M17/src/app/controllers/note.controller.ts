import express, { Request, Response } from "express";
import { Note } from "../models/note.model";

export const NoteRoute = express.Router()

// Create Note Endpoint
NoteRoute.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body
  const note = await Note.create(body)

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note
  })
})

// Get All Notes Endpoint
NoteRoute.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(200).json({
    success: true,
    message: "Notes retrieved successfully",
    notes
  });
});

// Get Single Note Endpoint
NoteRoute.get("/:id", async (req: Request, res: Response) => {
  const noteId = req.params.id
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

// Update Single Note Endpoint
NoteRoute.patch("/:id", async (req: Request, res: Response) => {
  const noteId = req.params.id;
  const updateData = req.body;
  const note = await Note.findByIdAndUpdate(noteId, updateData, { new: true })
  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    note
  })
})

// Delete Note Endpoint
NoteRoute.delete("/:id", async (req: Request, res: Response) => {
  const noteId = req.params.id;
  const note = await Note.findByIdAndDelete(noteId)
  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
    note
  })
})