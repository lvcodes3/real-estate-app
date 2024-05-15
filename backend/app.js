import express from "express";
const app = express();

// middlewares //
app.use(express.json());

import cookieParser from "cookie-parser";
app.use(cookieParser());

// routes //
import authRoutes from "./routes/auth.route.js";
app.use("/api/auth", authRoutes);

import postRoutes from "./routes/post.route.js";
app.use("/api/post", postRoutes);

// entry point //
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}...`);
});
