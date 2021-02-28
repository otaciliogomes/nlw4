import request from 'supertest';
import { app } from '../app';

import createConnetion from '../database';

describe("Surveys", () => {
    beforeAll(async () => {
        const connection = await createConnetion();
        await connection.runMigrations();
    })

    it("Should had a new survey", async () => {
        const response = await request(app).post('/surveys')
        .send({
            title: 'Talking about software developer',
            description: 'Now we talking about how started on develepor'
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it("Should be able to get all surveys", async () => {
        await request(app).post('/surveys')
        . send({
            title: 'Talking about software developer',
            description: 'Now we talking about how started on develepor' 
        });

        const response = await request(app).get('/surveys');
        
        expect(response.body.length).toBe(2);
    });
});