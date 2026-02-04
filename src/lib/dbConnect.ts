// Ei file ta use korle mongoConnect.ts and mongodb.ts file gulo lagbe na.
// ar eta use na korle baki duita lagbe. pode dekh beta

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string
if(!uri){
    throw new Error ('Mongodb Uri not found')
}
export async function dbConnect () {
    const client = new MongoClient(uri)
    await client.connect()
    const db = client.db()
    return({db, client})

}
