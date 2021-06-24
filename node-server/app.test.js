const app = require('./app');
const supertest = require('supertest');

let users;

beforeEach((done) => {
    users = [];
    done();
});

afterEach((done) => {
    users = [];
    done();
});

test('GET /id', async () => {
    await supertest(app)
        .get('/id')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            // Check data
            // expect(response.body).toBe(String);
        });
});

test('(1) GET /user', async () => {
    await supertest(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body.length).toEqual(0);
        });
});

test('POST /user', async () => {
    const post = { name: 'Post 1', age: 32 };

    await supertest(app)
        .post('/user')
        .send({ user: post })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .then((response) => {
            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('age');
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('date');
            expect(response.body.name).toBe(post.name);
            expect(response.body.age).toBe(post.age);
        });
});

test('(2) GET /user', async () => {
    const post = { name: 'Post 1', age: 32 };

    await supertest(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body.length).toEqual(1);

            expect(response.body[0].name).toBe(post.name);
            expect(response.body[0].age).toBe(post.age);
        });
});
