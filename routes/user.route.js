import express from "express";
import { registerUser,loginUser} from "../controllers/user.controller.js";


const router = express.Router();

router.post("/SignUp",registerUser);
router.post("/login",loginUser);

export default router;