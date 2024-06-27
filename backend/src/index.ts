import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to database");
});

const app = express();

app.use(express.json());

app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health ok" });
});

app.use("/api/my/user", myUserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API");
});

app.use((req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

app.listen(3000, () => {
  console.log("Server started on localhost:3000");
});
