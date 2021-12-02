import { Request, Response} from "express";
import { connection } from "../data/connection";

export default async function newPost(
    req: Request,
    res: Response
): Promise<void> {
    let errorCode = 500
    try{
        
        const {post} = req.body

        if(!post) {
            errorCode = 422;
            throw new Error("Field post is empty, please check it")
        }

        await connection("teste_post")
            .insert({
                id: Date.now().toString(),
                post: req.body.post,
                likes: 0
            });

            res.status(201).send("New post created")
    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
}