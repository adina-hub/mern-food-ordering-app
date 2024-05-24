import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

//if we get a request - post - this handler is gonna get called - handle business logic
router.post("/", jwtCheck , MyUserController.createCurrentUser);

export default router;