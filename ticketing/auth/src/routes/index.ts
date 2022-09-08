import { Router } from "express";
import { NotFoundError } from "../errors/not-found-error";
import { currentUserRouter } from "./current-user";
import { signinRouter } from "./signin";
import { signoutRouter } from "./signout";
import { signupRouter } from "./signup";

const router = Router();

const path = "/api/users";

router.use(`${path}/currentuser`, currentUserRouter);
router.use(`${path}/signin`, signinRouter);
router.use(`${path}/signup`, signupRouter);
router.use(`${path}/signout`, signoutRouter);
router.all("*", async () => {
  throw new NotFoundError();
});

export { router };
