import express from "express";
import "express-async-errors";
import { errorHandler } from "./middlewares/error-handler";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(3000, () => console.log("[Auth] Listening on port 3000"));
