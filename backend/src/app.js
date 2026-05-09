import express from 'express';
import userRoutes from './routes/user.route.js';
import chatRoutes from './routes/chat.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));


app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);


export default app;