import express from "express";
import PostRoutes from './posts';
import CategoryRoutes from './categories';

const router = express.Router();

router.use('/api/posts', PostRoutes);
router.use('/api/categories', CategoryRoutes);

export default router;