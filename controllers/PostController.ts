import { Request, Response } from "express";
import Post from "../models/Post";
import Category from "../models/Category";

export default class PostController {
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

    static async getPost(req: Request, res: Response) : Promise<void> {
        try {
            const post: Post | any = await Post.findOne({
                include: [Category],
                nest: true,
                raw: false,
                where: {
                    id: req.params.id
                }
            })

            if(post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ msg: 'Post not found!' });
            }
        } catch(e) {
            res.status(400).json(e);
        }
    }
}