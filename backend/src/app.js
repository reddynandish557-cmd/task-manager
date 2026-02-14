import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import UserRoutes from "./routes/UserRoutes.js";
import TaskRoutes from "./routes/TaskRoutes.js";
import { notFound } from "./middleware/notFound.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import AuthRoute from "./routes/authRoute.js";
import { register } from "./controllers/authController.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/users", UserRoutes);
app.use("/tasks", TaskRoutes);
app.use("/auth", AuthRoute);

app.use(notFound);
app.use(globalErrorHandler);

export default app;
