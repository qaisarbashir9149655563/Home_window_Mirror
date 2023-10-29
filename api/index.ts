// api/app.ts
import express from "express";
import "dotenv/config";
import env from "./utils/validateEnv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

const app = express();
const port = env.PORT || 10000;
app.use(cors());
app.use(bodyParser.json());

// Middleware

// Routes
app.use("/api", routes);

// Start the server
// Connect to MongoDB
mongoose
  .connect(env.MONGO_CONNECTION_STRING!)
  .then(() => {
    console.log("Mongo connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
