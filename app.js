import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';

import carsRouter from './routes/cars.js';
import authRouter from './routes/users.js';
dotenv.config();
const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());

app.use('/api/cars', carsRouter);
app.use('/api/users', authRouter);
export default app;
