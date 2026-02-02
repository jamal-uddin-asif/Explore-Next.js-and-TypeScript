import { Db, MongoClient } from "mongodb";
import clientPromise from "./mongodb";

export async function mongoConnect ():Promise <{client:MongoClient, db:Db}> {
    const client = await clientPromise
    const db = client.db(process.env.DB_NAME)
    return {db, client}
}