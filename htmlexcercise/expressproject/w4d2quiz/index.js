const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'quiz test' }));
app.set('view sengine', 'ejs');
app.set('views', path(__dirname, 'view'));

app.use('/', (req, res, next) => {
    if (!req.session.list) {
        req.session.list = [];
    }
    next();
});

app.get('/', (req, res) => {
    res.render('homepage', { list: req.session.list });
});

app.get('/add', (req, res) => {
    res.render('form');
});
app.post('/add', (req, res) => {
    req.session.list.push(req.body.item);
    res.redirect(303, '/');
});

