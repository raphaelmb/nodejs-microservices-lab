import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hi currentuser!");
});

export { router as currentUserRouter };
