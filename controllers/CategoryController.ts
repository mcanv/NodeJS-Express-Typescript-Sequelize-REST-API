import {Request, Response} from "express";
import Category from "../models/Category";
import Post from "../models/Post";

export default class CategoryController {
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

    static async getCategory(req: Request, res: Response) : Promise<void> {
        try {
            const category: Category | any = await Category.findOne({
                include: [Post],
                nest: true,
                raw: false,
                where: {
                    id: req.params.id
                }
            })

            if(category) {
                res.status(200).json(category);
            } else {
                res.status(404).json({ msg: 'Category not found!' });
            }
        } catch(e) {
            res.status(400).json(e);
        }
    }
}