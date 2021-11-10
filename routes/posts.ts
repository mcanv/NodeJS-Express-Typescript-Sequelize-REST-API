import express from "express";
import PostController from "../controllers/PostController";

const router = express.Router();

router.get('/', PostController.getPosts);
router.get('/:id', PostController.getPost);

export default router;