import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);


// routes 

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Chat app is running!");
});

app.listen(port, () => {
  connectMongoDB();
  console.log(`Server is running on port ${port}`);
});
