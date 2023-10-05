import { MongoClient } from "mongodb";
import { getUserById } from "../../db";

const fakeUsers = [
    {
        id: '1234',
        username: 'peter',
        email: 'peter@gmail.com'
    },
    {
        id: '2345',
        username: 'john',
        email: 'john@gmail.com'
    }
]
const uri = 'mongodb://localhost:27017/';

describe('Tests DB', () => {

    test('Should test db setup', async () => {
        const client = await MongoClient.connect(uri)

        const db = client.db('TEST_DB')

        await db.collection('users').insertMany(fakeUsers)

        const actual = await getUserById('1234')
        const finalDbState = await db.collection('users').find().toArray()
        await db.dropDatabase();
        client.close()

        expect(actual).toMatchObject(expect.objectContaining(fakeUsers[0]));
        expect(finalDbState).toMatchObject(expect.objectContaining(fakeUsers));

    })

})