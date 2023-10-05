import { MongoClient } from "mongodb"
const uri = 'mongodb://localhost:27017/';

export const getUserById = async (id) => {
    const client = await MongoClient.connect(uri)
    const db = client.db('TEST_DB')

    const result = await db.collection('users').findOne({id})
    
    client.close()

    return result
}