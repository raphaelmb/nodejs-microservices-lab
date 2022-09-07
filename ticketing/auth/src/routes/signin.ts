import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.send("Hi signin!");
});

export { router as signinRouter };
