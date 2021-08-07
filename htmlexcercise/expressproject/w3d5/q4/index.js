var express = require('express');
const { read } = require('fs');
var path = require('path');
var app = express();
app.use(express.urlencoded({ extended: false }));
const getHour = function () {
    const date = new Date();
    return date.getHours();
}
app.use('/css', express.static(path.join(__dirname, "css")));

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
        <html lang = "en" >
            <head>
              <link href="css/${getHour() > 6 && getHour() < 18 ? "day.css" : "night.css"}
              " rel="stylesheet"/>
             
                <meta charset="UTF-8">
                    <title> My Form </title>
                 </head>
                <body>
                    <form method="post" action="/result">
                        <label>Name</label>
                        <input type="text" name="name" />
                        <label>Age</label>
                        <input type="text" name="age" />
                        <button type="submit">Submit Query</button>
                    </form>
                </body>
   </html>`);
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.redirect(`/output?name=${name}&age=${age}`);
});
app.get('/output', (req, res) => {
    res.send(`name is ${req.query.name} and age is ${req.query.age}`);
});
app.listen(3000);