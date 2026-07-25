import express, { Application, Request, Response } from 'express'
import { NoteRoute } from './app/controllers/note.controllers';

const app: Application = express();
app.use(express.json());

app.use("/notes", NoteRoute)


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Note App');
});

export default app