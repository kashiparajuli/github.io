var express = require('express');
var path=require('path');
var app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`name is ${name} and age is ${age}`);
});
app.listen(3000);