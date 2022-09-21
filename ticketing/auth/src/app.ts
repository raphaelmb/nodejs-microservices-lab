import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { errorHandler } from "./middlewares/error-handler";
import { router } from "./routes";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(router);
app.use(errorHandler);

export { app };
