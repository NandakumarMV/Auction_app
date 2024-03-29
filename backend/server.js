import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler, notFound } from "./middlewares/errorMiddleWare.js";
import connectDB from "./config/db.js";
connectDB();
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import updateExpiredFlagMiddleware from "./middlewares/updateExpiredMiddleware.js";
const app = express();

app.use(updateExpiredFlagMiddleware);
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.listen(port, () => console.log(`server is starting on port ${port}`));
app.use(notFound);
app.use(errorHandler);
