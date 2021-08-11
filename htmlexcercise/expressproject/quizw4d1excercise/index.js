const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
var list = [];
app.get('/', (req, res) => {
    res.render('homepage', { list: list });
});

app.get('/add', (req, res) => {
    res.render('form');
});

app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(303, '/');
});
app.listen(3000);




