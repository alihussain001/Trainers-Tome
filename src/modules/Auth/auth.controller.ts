import { Router } from "express";

import{
    singup, 
    login,

}from "./auth.service";

const router = Router();

router.post("/", singup);
router.post("/", login);

export { router as authRouter};