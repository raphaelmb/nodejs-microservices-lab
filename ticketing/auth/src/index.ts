import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { errorHandler } from "./middlewares/error-handler";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);
app.use(errorHandler);

(async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => console.log("[Auth] Listening on port 3000"));
})();
