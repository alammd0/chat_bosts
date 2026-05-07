import express from 'express';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use('/api/user', userRoutes);


export default app;