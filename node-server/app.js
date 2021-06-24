const express = require('express');
const { v4: uuidv4 } = require('uuid');

const users = [];

const app = express();
app.use(express.json());

/* 
  GET ['/id']: Returns universally unique identifier without delay
*/
app.get('/id', (req, res) => {
    const id = uuidv4();
    res.status(200).json(id);
});

/* 
GET ['/user']: Return user details
*/
app.get('/user', (req, res) => {
    const data = users;
    res.status(200).json(data);
});

/* 
POST ['/user']: Return user details
*/
app.post('/user', (req, res) => {
    let user = {};
    user = req.body?.user;
    if (Math.random() < 0.5) {
        user.id = uuidv4();
        user.date = new Date().toDateString();
        users.unshift(user);
    }
    res.status(201).json(user);
});

module.exports = app;
