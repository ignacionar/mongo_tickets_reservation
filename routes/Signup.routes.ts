import { Router } from "express";
import { createUser } from "../controllers/Users";

const router = Router();

router.post('/', createUser)

export { router as signupRouter }