import { Request, Response } from "express";
import Post from "../models/Post";
import Category from "../models/Category";

export default class HomeController {
    static async getPosts(req: Request, res: Response) : Promise<void> {
        try {
            const posts : Post[] = await Post.findAll({
                include: [Category],
                nest: true,
                raw: false,
            });
            res.status(200).json(posts);
        } catch (e) {
            res.status(400).json(e);
        } 
    }

    static async getCategories(req: Request, res: Response) : Promise<void> {
        try {
            const categories: Category[] = await Category.findAll({
                include: [Post],
                nest: true,
                raw: false
            });
            res.status(200).json(categories);
        } catch (e) {
            res.status(400).json(e);
        }
    }
}