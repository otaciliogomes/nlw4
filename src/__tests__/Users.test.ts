import request from 'supertest';
import { app } from '../app';

import createConnetion from '../database';

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnetion();
        await connection.runMigrations();
    })

    it("Should be able to create a new user", async () => {
        const response = await request(app).post('/users')
        .send({
            email: 'test@gmail.com',
            name: 'Test Name'
        });

        expect(response.status).toBe(201)
    });

    it("Should not be able to create a users with exist email", async () => {
        const response = await request(app).post('/users')
        .send({
            email: 'test@gmail.com',
            name: 'Test Name'
        });

        expect(response.status).toBe(400)
    });
});