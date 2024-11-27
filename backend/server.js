import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();

dotenv.config();

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 80000");
    connectMongoDB();
});