import request from 'supertest'; 
import mongoose from 'mongoose'; 
import app from './index.mjs'; 


import {smodel, gmodel} from './src/models/smodel.mjs';

import { assignSeeker, toggleTopGuru} from './src/controllers/gcontroller.mjs';

// Define a test suite for the user routes
describe('User Routes', () => {
    // Define a test for the POST /user/create route
    describe('POST /user/create', () => {
        it('should create a new user', async () => {
            // Mock request body data
            const userData = {
                name: 'Test User',
                gender: 'male',
                dob: '1990-01-01',
                phone: '1234567890',
                email: 'test@example.com',
                password: 'password'
            };

            // Send a POST request to create a new user
            const res = await request(app)
                .post('/user/create')
                .send(userData);

            // Expect the response status code to be 200
            expect(res.statusCode).toBe(200);

            // Expect the response body to contain a success message
            expect(res.body.status).toBe('ok');
            expect(res.body.message.name).toBe(userData.name);
            expect(res.body.message.email).toBe(userData.email);
        });
    });
});

// Define a test suite for the astrologer controller functions
describe('Astrologer Controller', () => {
    // Define a test for the assignSeeker function
    describe('assignSeeker', () => {
        it('should assign a user to an astrologer', async () => {
            // Create a new user
            const newUser = await smodel.create({
                name: 'Test User',
                gender: 'male',
                dob: '1990-01-01',
                phone: '1234567890',
                email: 'test@example.com',
                password: 'password'
            });

            // Call the assignSeeker function
            const result = await assignSeeker();

            // Expect the result to contain the ID of the assigned astrologer
            expect(result.astrologerId).toBeDefined();

            // Clean up: Delete the created user
            await smodel.findByIdAndDelete(newUser._id);
        });
    });

    // Define a test for the toggleTopGuru function
    describe('toggleTopGuru', () => {
        it('should toggle the top status of an astrologer', async () => {
            // Create a new astrologer
            const newAstrologer = await gmodel.create({
                name: 'Test Astrologer',
                top: false
            });

            // Call the toggleTopGuru function
            const result = await toggleTopGuru(newAstrologer._id);

            // Expect the result to contain the updated astrologer
            expect(result.astrologer.top).toBe(true);

            // Clean up: Delete the created astrologer
            await gmodel.findByIdAndDelete(newAstrologer._id);
        });
    });
});