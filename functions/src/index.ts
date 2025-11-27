import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { userRoutes } from './infrastructure/http/routes/user.routes';

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Rutas
app.get('health', (req, res) => {
   res.status(200).send('OK');
});
app.use('/v1/users', userRoutes);


app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
   console.error(err);
   res.status(500).json({ error: 'Internal Server Error' });
});

export const api = functions.https.onRequest(app);