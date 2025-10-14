import express from 'express';
import cors from 'cors';
import type { Application, Request, Response } from 'express';
import routes from './app/routes/index';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1', routes);

// Health checker
app.get('/', (req: Request, res: Response) => {
  res.send('Backend Running...');
});

export default app;