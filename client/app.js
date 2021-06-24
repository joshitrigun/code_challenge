const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const SERVER_URL = 'http://node:8000';

app.get('/', (req, res) => {
    let user = { name: 'userName', age: 24 };
    axios
        .post(`${SERVER_URL}/user`, { user })
        .then((response) => {
            axios.get(`${SERVER_URL}/user`).then((response) => {
                const data = response.data;
                res.render('pages/index', {
                    users: data,
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
