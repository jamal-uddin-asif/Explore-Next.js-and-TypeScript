import { Db, MongoClient } from "mongodb";
import clientPromise from "./mongodb";

interface TMongoConnect {
    client: MongoClient,
    db: Db
}

// Session a interface ti na likhe direct use korche jemon <{client: MongoClient, db: DB}>.
//  ami interface er maddhome aro easy way te likhlam . 

export async function mongoConnect ():Promise <TMongoConnect> {
    const client = await clientPromise
    const db = client.db('next_event_db')
    return {db, client}
}