import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use('/api/message',messageRoutes);
const port=process.env.PORT || 5001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    connectDB();
})