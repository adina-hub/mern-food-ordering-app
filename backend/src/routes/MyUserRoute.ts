import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

//if we get a request - post - this handler is gonna get called - handle business logic
router.post("/", MyUserController.createCurrentUser);

export default router;