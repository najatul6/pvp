import express, { Application, Request, Response } from 'express'
import { NoteRoute } from './app/controllers/note.controller';
import { UserRoute } from './app/controllers/user.controller';

const app: Application = express();
app.use(express.json());

app.use("/notes", NoteRoute)
app.use("/user", UserRoute)


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Note App');
});

export default app