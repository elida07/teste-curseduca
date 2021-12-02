import { connection } from "./connection";
import posts from "./posts.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const insertPosts = () => connection("teste_post")
    .insert(posts)
    .then(() => { console.log("Posts criados!") })
    .catch(printError)

const closeConnection = () => { connection.destroy() }

insertPosts()
    .finally(closeConnection)