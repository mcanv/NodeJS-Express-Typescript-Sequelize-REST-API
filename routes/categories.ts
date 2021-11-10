import express from "express";
import CategoryController from "../controllers/CategoryController";

const router = express.Router();

router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.getCategory)

export default router;