
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

var cookies = [];
app.get('/', (req, res) => {
    res.render('index',{cookies:req.cookies});
});

app.post('/addCookies', (req, res) => {
    let key = req.body.key;
    let value = req.body.value;
    res.cookie(key, value);
    res.redirect(303, '/');
});
app.listen(3000);



