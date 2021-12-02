import { Request, Response} from "express";
import { connection } from "../data/connection";

export default async function getPosts(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const result = await connection("teste_post");

        res.status(200).send(result);
    } catch (error) {
        console.log(error.sqlMessage || error.message);
        res.status(500).send(error.sqlMessage || error.message)
    }
};