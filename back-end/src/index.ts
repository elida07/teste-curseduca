import dotenv from "dotenv";
import app from "./app";
import getPosts from "./endpoints/getAllPosts";
import newPost from "./endpoints/newPost";

dotenv.config()

app.get("/posts", getPosts);
app.post("/create-post", newPost);