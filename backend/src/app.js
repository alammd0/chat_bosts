import express from 'express';
import userRoutes from './routes/user.route.js';
import chatRoutes from './routes/chat.route.js';
import profileRoutes from './routes/profile.route.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));


app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use("/api/profile", profileRoutes)


export default app;