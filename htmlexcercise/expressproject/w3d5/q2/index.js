var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
        <html lang = "en" >
            <head>
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
    res.send(`name is ${name} and age is ${age}`);
});
app.listen(3000);