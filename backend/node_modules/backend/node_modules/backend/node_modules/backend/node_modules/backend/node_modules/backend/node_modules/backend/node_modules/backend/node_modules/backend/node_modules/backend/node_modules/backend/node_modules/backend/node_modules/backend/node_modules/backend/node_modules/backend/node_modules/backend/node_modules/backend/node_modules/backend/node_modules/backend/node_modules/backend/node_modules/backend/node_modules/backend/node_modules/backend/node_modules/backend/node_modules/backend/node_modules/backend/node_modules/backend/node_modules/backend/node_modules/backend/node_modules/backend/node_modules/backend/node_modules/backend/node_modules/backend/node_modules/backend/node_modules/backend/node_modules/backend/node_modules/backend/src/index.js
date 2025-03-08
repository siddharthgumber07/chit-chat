import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}))
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use('/api/messages',messageRoutes);
const port=process.env.PORT || 5001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    connectDB();
})