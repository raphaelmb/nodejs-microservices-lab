import { Request, Response, Router } from "express";

const router = Router();

router.post("/", (request: Request, response: Response) => {
  request.session = null;
  response.send({});
});

export { router as signoutRouter };
