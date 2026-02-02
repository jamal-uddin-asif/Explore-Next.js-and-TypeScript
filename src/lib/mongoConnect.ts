import { Db, MongoClient } from "mongodb";
import clientPromise from "./mongodb";

export async function mongoConnect ():Promise <{client:MongoClient, db:Db}> {
    const client = await clientPromise
    const db = client.db('next_event_db')
    return {db, client}
}