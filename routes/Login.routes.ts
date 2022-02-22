import { Router } from "express";
import { getUser } from "../controllers/Users";

const router = Router();

router.post('/', getUser)

export { router as loginRouter }