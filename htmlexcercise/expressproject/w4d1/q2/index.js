const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
app.use(session({ secret: 'secret' }));


app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));


app.use('/', (req, res, next) => {
    if (!req.session.userInfo) {
        req.session.userInfo = {};
    }
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', (req, res) => {
    req.session.userInfo["name"] = req.body.name;
    req.session.userInfo["age"] = req.body.age;
    res.redirect('/output');
});
app.get('/output', (req, res) => {
    res.send(`name is ${req.session.userInfo["name"]} & ${req.session.userInfo["age"]}`);
})
app.listen(3000);