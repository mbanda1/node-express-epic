import sinon from 'sinon';
import request from 'supertest'
import express from 'express';
import * as db from '../../db.js';
import usersRouter from '../../routes/users.js';

const app = express();
app.use('/users', usersRouter);

describe('GET user/:id', () => {
    test('Should get user by id', async () => {
        const fakeData = {
            id: '1234',
            username: 'peter',
            email: 'peter@gmail.com'
        }

        const stub = sinon
            .stub(db, 'getUserById')
            .resolves(fakeData)

        await request(app).get('/users/db/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(fakeData)

        expect(stub.getCall(0).args[0]).toEqual('1234');

        stub.restore();
    });

})
