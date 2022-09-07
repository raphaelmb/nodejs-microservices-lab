import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.send("Hi signout!");
});

export { router as signoutRouter };
