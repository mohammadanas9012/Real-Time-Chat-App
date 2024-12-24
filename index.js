import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoute from '../Backend/src/routes/auth.route.js';
import messageRoutes from './src/routes/message.route.js';
import { connectDB } from "../Backend/src/lib/db.js";
import { app, server } from "./src/lib/socket.js";

dotenv.config();

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
})
);

app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoutes);

server.listen(PORT,()=>{
    console.log("Server is running on PORT:"+PORT);
    connectDB();
});

