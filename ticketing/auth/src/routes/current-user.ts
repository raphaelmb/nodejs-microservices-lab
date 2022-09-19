import { Request, Response, Router } from "express";
import { currentUser } from "../middlewares/current-user";

const router = Router();

router.get("/", currentUser, (request: Request, response: Response) => {
  return response.send({ currentUser: request.currentUser || null });
});

export { router as currentUserRouter };
