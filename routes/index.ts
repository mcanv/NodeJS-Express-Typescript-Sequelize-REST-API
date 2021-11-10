import express from "express";
import HomeController from "../controllers/HomeController";

const router = express.Router();

router.get('/', HomeController.getPosts);
router.get('/categories', HomeController.getCategories);

export default router;